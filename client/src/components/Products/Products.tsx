import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SingleProduct from "./SingleProduct";
import { CircularProgress } from "@mui/material";

import { IServerGetOneItemData, IServerGetOneCompanyData, IProduct } from '../../interfaces';

const Products = () => {
  // setting state
  const [products, setProducts] = useState<IProduct[] | []>([]);
  // const [companies, setCompanies] = useState([]);
  // let productsArray = [];

  //Make two calls to API
  useEffect(() => {
    let items: IServerGetOneItemData[];
    let companies: IServerGetOneCompanyData[];

    fetch(`/items`)
      .then((res) => res.json())
      .then(async (data) => {
        //Save items
        items = data.data;

        //The data from both API calls are dependent on one another for populating the product cards
        const res = await fetch(`/companies`);
        const companiesApiResponse = await res.json();
        //Save companies
        companies = companiesApiResponse.data;
        // console.log({ data_1 });
      })
      .then(() => {
        if (items && companies) {
          // merge items to the corresponding companies data set
          // sort in alphabetical order
          const products = items
            .map(({ name, _id, imageSrc, companyId, ...rest }): IProduct => ({
              productName: name,
              productId: _id,
              img: imageSrc,
              companyId,
              companyName: companies.find(
                (company) => company._id === companyId
              )?.name ?? '',
              ...rest
            }))
            .sort((a, b) => {
              if (a.productName < b.productName) {
                return -1;
              }
              if (a.productName > b.productName) {
                return 1;
              }
              return 0;
            });

          setProducts(products);
        }
      });
  }, []);

  return (
    <PageWrapper>
      <section>
        <div className="column">
          <PageTitle>Products</PageTitle>
        </div>
      </section>
      {products.length > 0 ? (
        <div className="grid">
          {products.map((p) => {
            return (
              <SingleProduct
                key={p.productId}
                productName={p.productName}
                price={p.price}
                img={p.img}
                companyName={p.companyName}
                productId={p.productId}
              />
            );
          })}
        </div>
      ) : (
        <LoadingWrapper>
          <CircularProgress />
        </LoadingWrapper>
      )}
    </PageWrapper>
  );
};
const PageWrapper = styled.div`
  text-transform: uppercase;
`;
const PageTitle = styled.h1`
  font-size: var(--font-size-big);
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;

export default Products;
