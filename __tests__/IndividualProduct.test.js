// import { render, screen } from "@testing-library/react";
// import '@testing-library/jest-dom'
// import IndividualProduct from "../pages/catalogo/[category]/[productCode]";

// // import { connectDb } from "../lib/connectDb";

// describe('Menú producto individual', () => {

//   let expectedProps

//   beforeEach(() => {
//     expectedProps = {
//       success: true,
//       error: false,
//       item: {
//         name: "Camisa naranja",
//         productCode: "fsaf421",
//         category: "blusas",
//         color: "Naranja",
//         img: "https://topitop.vteximg.com.br/arquivos/ids/180004-1000-1248/1738045_1.jpg?v=637293341864570000",
//         sizes: [
//           {
//             size: "M",
//             stock: 12,
//             prize: 120
//           }
//         ]
//       }
//     }
//   });

//   test('Debe renderizar correctamente el nombre, código de producto, categoría y color', () => {
//     const { getByText } = render(<IndividualProduct {...expectedProps} />)
//     const name = getByText(expectedProps.item.name)
//     const productCode = getByText(expectedProps.item.productCode)
//     const category = getByText(expectedProps.item.category)
//     const color = getByText(expectedProps.item.color)

//     expect(name).toBeVisible()
//     expect(productCode).toBeVisible()
//     expect(category).toBeVisible()
//     expect(color).toBeVisible()
//   })
// })