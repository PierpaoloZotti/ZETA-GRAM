import { Modal, useMantineTheme } from "@mantine/core";
import "./ProfileModal.css";
function ProfileModal({ modalOpened, setModalOpened }) {
   const theme = useMantineTheme();

   return (
      <Modal
         opened={modalOpened}
         onClose={() => setModalOpened(false)}
         radius={16}
         size={"50%"}
         overlayProps={{
            color: theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2],
            opacity: 0.55,
            blur: 3,
         }}
      >
         <form className="infoForm">
            <h3>Update Your Info</h3>
            <div className="inputModal">
               <input type="text" className="inputForm" name="FirstName" placeholder="First Name" />
               <input type="text" className="inputForm" name="LastName" placeholder="Last Name" />
            </div>
            <div className="inputModal">
               <input
                  type="text"
                  className="inputForm"
                  name="Relationship"
                  placeholder="Relationship stauts"
               />
            </div>
            <div className="inputModal">
               <input type="text" className="inputForm" name="WorksAt" placeholder="Works at" />
            </div>
            <div className="inputModal">
               <input type="text" className="inputForm" name="LivesIn" placeholder="Lives In" />
               <input type="text" className="inputForm" name="Country" placeholder="Country" />
            </div>
            <div className="inputModal">
               Profile Image
               <input type="file" name="profileImg" id="profileImg" />
               Cover Image
               <input type="file" name="coverImg" id="coverImg" />
            </div>
            <button className="button bModal">Update</button>
         </form>
      </Modal>
   );
}

export default ProfileModal;
