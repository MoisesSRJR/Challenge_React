import styled from 'styled-components';
import colors from '../../styles/colors';

export const HeaderTable = styled.div`
  height: 40px;
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: ${colors.gray100};
  text-transform: uppercase;

  .product {
    grid-column: span 5 / span 1;
  }

  .qtd {
    grid-column: span 2 / span 1;
  }

  .sub {
    display: flex;
    justify-content: center;
    grid-column: span 3 / span 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Products = styled.div`
  height: auto;
  margin-bottom: 21px;
`;

export const ProductsMobile = styled.div`
  height: 430px;
  overflow-y: auto;
  margin-bottom: 21px;
  display: flex;
  flex-direction: column;
  padding: 16px;
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  margin-bottom: 10px;
`;

export const ListMobile = styled.div`
  height: 115px;
  display: flex;
  justify-content: start;
  margin-bottom: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  padding-left: 16px;

  @media (max-width: 371px) {
    padding-left: 5px;
  }

  .titleMobile {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: ${colors.background};
  }

  .priceMobile {
    padding-left: 15%;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin-left: auto;
`;

export const SubTotal = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;

  .subTotal {
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: ${colors.gray100};
  }
`;

export const Movie = styled.div`
  grid-column: span 2 / span 1;
  img {
    width: 89px;
    height: 114px;
  }
  @media (max-width: 371px) {
    img {
      width: 69px;
      height: 94px;
    }
  }
`;

export const Names = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-column: span 3 / span 1;

  @media (max-width: 850px) {
    margin-left: 25px;
  }

  .name {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    color: ${colors.background};

    @media (max-width: 850px) {
      width: 100px;
    }
  }

  .price {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    margin-top: 8px;
  }
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  grid-column: span 2 / span 1;

  @media (max-width: 794px) {
    margin-left: 16%;
  }
`;

export const PriceTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: span 3 / span 1;

  @media (max-width: 850px) {
    margin-left: 8%;
  }

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;

    @media (max-width: 850px) {
      width: 100px;
    }
  }
`;

export const Trash = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  grid-column: span 2 / span 1;

  @media (max-width: 850px) {
    margin-left: 13%;
  }
`;

export const FinalOrder = styled.div`
  border-top: 1px solid ${colors.gray100};
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: end;

  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column-reverse;
    align-items: flex-end;
    height: 100px;
    padding: 16px;
  }
`;

export const Total = styled.div`
  width: 177px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: ${colors.gray100};
  text-transform: uppercase;
  padding-right: 15px;

  @media (max-width: 768px) {
    padding-bottom: 5px;
  }

  .value {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: ${colors.background};
  }
`;
