import React, { useState, useEffect, useContext } from "react";

import {
  Footer,
  Header,
  About,
  Brand,
  Contact,
  Faq,
  Features,
  Hero,
  Loader,
  Progress,
  SideBar,
  Team,
  Token,
  TokenInfo,
  Roadmap,
  Popup,
  TransferToken,
  Owner,
  TransferCurrency,
  Donate,
  UpdateAddress,
  UpdatePrice,
} from "../Components/index";

import { TOKEN_ICO_Context } from "../context/index";
import { shortenAddress } from "../Utils/index";

const index = () => {

  const {
    TOKEN_ICO,
    BUY_TOKEN,
    TRANSFER_ETHER,
    DONATE,
    UPDATE_TOKEN,
    UPDATE_TOKEN_PRICE,
    TOKEN_WITHDRAW,
    TRANSFER_TOKEN,
    CONNECT_WALLET,
    ERC20,
    CHECK_ACCOUNT_BALANCE,
    setAccount,
    setLoader,
    addtokenToMetaMask,
    TOKEN_ADDRESS,
    loader,
    account,
    currency,
  } = useContext(TOKEN_ICO_Context);

  const [ownerModal, setOwnerModal] = useState(false);
  const [buyModal, setBuyModal] = useState(true);
  const [tranferModal, setTransferModal] = useState(false);
  const [transferCurrency, setTransferCurrency] = useState(false);
  const [openDonote, setOpenDonote] = useState(false);
  const [openUpdatePrice, setOpenUpdatePrice] = useState(false);
  const [openUpdateAddress, setOpenUpdateAddress] = useState(false);
  const [details, setDetails] = useState();

  useEffect(() => {
    console.log("address");
    const fetchData = async () => {
      const items = await TOKEN_ICO();

      console.log(items);
      setDetails(items);
    };
    fetchData();

  }, []);

  return <>
    <div className="body_wrap"></div>
    {ownerModal &&
      <Owner setOwnerModal={setOwnerModal}
        currency={currency}
        details={details}
        account={account}
        setTransferCurrency={setTransferCurrency}
        setTranferModal={setTransferModal}
        setOpenDonote={setOpenDonote}
        TOKEN_WITHDRAW={TOKEN_WITHDRAW}
        setOpenUpdatePrice={setOpenUpdatePrice}
        setOpenUpdateAddress={setOpenUpdateAddress}
      />
    }

    {
      buyModal &&
      < Popup
        setBuyModal={setBuyModal}
        BUY_TOKEN={BUY_TOKEN}
        currency={currency}
        details={details}
        account={account}
        ERC20={ERC20}
        TOKEN_ADDRESS={TOKEN_ADDRESS}
        setLoader={setLoader}
      />

    }

    {
      tranferModal &&
      <TransferToken
        setTransferModal={setTransferModal}
        TRANSFER_TOKEN={TRANSFER_TOKEN}
        ERC20={ERC20}
        setLoader={setLoader}
      />

    }

    {
      transferCurrency &&
      <TransferCurrency
        TRANSFER_ETHER={TRANSFER_ETHER}
        setTransferCurrency={setTransferCurrency}
        details={details}
        currency={currency}
        CHECK_ACCOUNT_BALANCE={CHECK_ACCOUNT_BALANCE}
        setLoader={setLoader}
      />

    }

    {
      openDonote &&
      <Donate
        details={details}
        currency={currency}
        setOpenDonote={setOpenDonote}
        DONATE={DONATE}

      />
    }

    {
      openUpdatePrice &&
      <UpdatePrice
        details={details}
        currency={currency}
        setOpenUpdatePrice={setOpenUpdatePrice}
        UPDATE_TOKEN_PRICE={UPDATE_TOKEN_PRICE}
      />
    }

    {
      openUpdateAddress &&
      <UpdateAddress

        details={details}
        currency={currency}
        setOpenUpdateAddress={setOpenUpdateAddress}
        UPDATE_TOKEN={UPDATE_TOKEN}
        ERC20={ERC20}
        setLoader={setLoader}

      />
    }


  </>;
};

export default index;
