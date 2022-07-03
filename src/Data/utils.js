import { collection, getDocs } from "firebase/firestore";
import fireDataB from "./FireBaseConfig";

export const getProducts = async () => {
  const productSnapshot = await getDocs(collection(fireDataB, "productos"));
  const productList = productSnapshot.docs.map((doc) => {
    const productData = doc.data();
    productData.id = doc.id;
    return productData;
  });
  return productList;
};
