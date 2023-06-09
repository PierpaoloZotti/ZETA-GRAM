import PostModel from "../Models/postModel.js";
import UserModel from "../Models/userModel.js"
import mongoose from "mongoose";

//Create a new post

export const createPost = async (req, res) => {
    const { userId, desc, image } = req.body
    const newPost = new PostModel({ userId, desc, image }); //This 2 lines may be: const newPost = new PostModel(req.body)
    try {
        await newPost.save();
        res.status(200).json("Post Created successfully");
    } catch (error) {
        res.status(500).json({ error: error })
    }
};

//Get a post

export const getPost = async (req, res) => {
    const id = req.params.id;
    try {
        const post = await PostModel.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error })
    }

};

//Update a post

export const updatePost = async (req, res) => {
    const postId = req.params.id;
    const { userId } = req.body;
    try {
        const post = await PostModel.findById(postId);
        if (post.userId === userId) {
            await post.updateOne({ $set: req.body })
            res.status(200).json("Post updated successfully")
        } else {
            res.status(403).json("Action Frobidden")
        }
    } catch (error) {
        res.status(500).json({ error: error })
    }

};

//Delete a post

export const deletePost = async (req, res) => {
    const postId = req.params.id;
    const { userId } = req.body;
    try {
        const post = await PostModel.findById(postId)
        if (post.userId === userId) {
            await post.deleteOne();
            res.status(200).json("Post deleted successfully")
        } else {
            res.status(403).json("Action forbidden");
        }
    } catch (error) {
        res.status(500).json({ error: error })
    }
};

//Like and dislike a post

export const likePost = async (req, res) => {
    const postId = req.params.id;
    const { userId } = req.body;

    try {
        const post = await PostModel.findById(postId);
        if (!post.likes.includes(userId)) {
            await post.updateOne({ $push: { likes: userId } })
            res.status(200).json("post liked")
        } else {
            await post.updateOne({ $pull: { likes: userId } });
            res.status(200).json("post unliked")
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Get timeline posts

export const getTimeline = async (req, res) => {
    const userId = req.params.id;

    try {
        const currentUserPosts = await PostModel.find({ userId: userId });
        const followingPosts = await UserModel.aggregate([
            {
                $match: {
                    _id: new mongoose.Types.ObjectId(userId),
                },
            },
            {
                $lookup: {
                    from: "posts",
                    localField: "following",
                    foreignField: "userId",
                    as: "followingPosts",
                },
            },
            {
                $project: {
                    followingPosts: 1,
                    _id: 0,
                },
            },
        ]);

        res
            .status(200)
            .json(currentUserPosts.concat(...followingPosts[0].followingPosts)
                .sort((a, b) => {
                    return b.createdAt - a.createdAt;
                })
            );
    } catch (error) {
        res.status(500).json(error);
    }
};
