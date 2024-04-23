import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IMG from '../Pages/images/database webp.webp'


const projectsData = [
  {
    title: 'Database SQL and ORM',
    description: 'Database SQL and ORM',
    githubLink: 'https://github.com/mohamed-edu/Lab-4-individuell-arbete',
    imageUrl: 'images/database webp.webp',
  },
  {
    
  }
];
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  const handleOpen1 = () => setOpen1(true);
  const handleOpen2 = () => setOpen2(true);
  const handleOpen3 = () => setOpen3(true);

  const handleClose1 = () => setOpen1(false);
  const handleClose2 = () => setOpen2(false);
  const handleClose3 = () => setOpen3(false);

  return (
    <div  style={{ display: 'flex', flexDirection: 'row',alignItems: 'center', justifyContent: 'center', gap: '50px'}}>
      <div  >
        <div>
      <Button variant="outlined" onClick={handleOpen1}>Database SQL and ORM</Button>
      </div>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          A fully functional application for school administration and it uses EF
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
            <a href='https://github.com/mohamed-edu/Lab-4-individuell-arbete'> Github Link </a>
          </Typography>
        </Box>
      </Modal>
    </div>
    {/* project 2*/}
    <div>
    <Button variant="outlined" onClick={handleOpen2}>OOP Animal</Button>
    <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
                  This project is used for inheritance and
                   deals with different types of animals that are the same species
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
            <a href='https://github.com/mohamed-edu/Animal-OOP-lab-6'> Github Link </a>
          </Typography>
        </Box>
      </Modal>
    </div>
     {/*project3*/}
     <div>
    <Button variant="outlined" onClick={handleOpen3}>OOP generic</Button>
    <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          This lab is all about using two common generic types within C# it creates a class and items based 
                  on that class that will then be handled through Stack and Lis..
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            
            <a href='https://github.com/mohamed-edu/Lab8-generics'> Github Link </a>
          </Typography>
        </Box>
      </Modal>
    </div>
    </div>
    
  );
}
