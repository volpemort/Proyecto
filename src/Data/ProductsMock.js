import createTypography from "@mui/material/styles/createTypography"

const productos = [
    { title :"Calibre Estandar",
      price : 1000,
      image :"Calibre-Pie-de-rey-500-171-30B.jpg",
      stock : 5,
      id: 1,
      category:"calibres"
  },
    { title :"Calibre Con Reloj",
      price : 4000,
      image :"calibre-mecanico-con-dial.jpg",
      stock : 3,
      id: 2,
      category:"calibres"
  },
  { title :"Calibre IP67",
    price : 6000,
    image :"Calibre-Serie-500-IP67.jpg",
    stock : 10,
    id: 3,
    category:"calibres"
    },
    { title :"Micrometro Mecanico Exterior",
      price : 8000,
      image :"Micrometro-103-137.jpg",
      stock : 15,
      id: 4,
      category:"micrometros"
  },
    { title :"Micrometro Digital Exterior",
      price : 12000,
      image :"Micrometro-293-230-30.jpg",
      stock : 6,
      id: 5,
      category:"micrometros"
  },
  { title :"Micrometro interior",
    price : 6000,
    image :"Micrometro-368.jpg",
    stock : 10,
    id: 6,
    category:"micrometros"
    },
  ]

  const itemCategory = ["micrometros", "calibres" ]


  export default productos
  export {itemCategory}