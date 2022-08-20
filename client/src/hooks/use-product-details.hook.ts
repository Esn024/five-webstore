import { useState, useEffect } from "react";
import { IServerGetOneItemResponse, IServerGetOneItemData, IServerGetOneCompanyData, IProductDetails } from '../interfaces';

//custom hook for relevant product details, company name and website
const useProductDetails = (productId: number) => {
  const [productDetails, setProductDetails] = useState<IProductDetails | null>(null);

  useEffect(() => {
    // fetch company info
    const fetchCompanyDetails = async (companyID: number):Promise<IServerGetOneCompanyData> => {
      const response = await fetch(`/companies/${companyID}`);
      const resJSON = await response.json();
      return resJSON.data;
    };

    // fetch product info
    const fetchAndSetProductDetails = async (productId: number):Promise<void> => {
      const response = await fetch(`/items/${productId}`);
      const resJSON:IServerGetOneItemResponse = await response.json();
      const product:IServerGetOneItemData = resJSON.data;

      // fetch company info for the product
      const company = await fetchCompanyDetails(product.companyId);

      // create a new object that adds fields for the company name and company URL
      const productDetailsObj: IProductDetails = {
        ...product,
        companyName: company.name,
        companyUrl: company.url,
      };

      // update the product details
      setProductDetails(productDetailsObj);
    };

    // if there is a productId, run the fetchAndSetProductDetails function
    if (productId) {
      fetchAndSetProductDetails(productId);
    }

    // cleanup
    return () => {
      setProductDetails(null);
    };
  }, [productId]);

  return [productDetails, setProductDetails] as const;
};

export default useProductDetails;
