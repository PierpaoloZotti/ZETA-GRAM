import { Modal, useMantineTheme } from "@mantine/core";
import "./ShareModal.css";
import PostShare from "../postShare/PostShare";

function ShareModal({ modalOpened, setModalOpened }) {
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
         <PostShare />
      </Modal>
   );
}

export default ShareModal;
