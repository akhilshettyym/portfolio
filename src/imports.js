// imports of APP
import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import ProfessionalJourney from "./sections/ProfessionalJourney"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Experience from "./sections/Experience"
import LogoSection from "./components/LogoSection"
import FeatureCards from "./components/FeatureCards"

// About section mports
import { useState, useRef, Suspense} from "react"
import Globe from "react-globe.gl"
import * as THREE from "three"

// Contact Section Imports
import emailjs from "@emailjs/browser"
import useAlert from "./hooks/useAlert"
import Alert from "./components/Alert"
import TitleHeader from "./components/TitleHeader"
import ContactExperience from "./components/ContactExperience"
import Button from "./components/Button"

// Experience Section Imports
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Developer from "./components/Developer.jsx"
import CanvasLoader from "./components/CanvasLoader.jsx"
import { workExperiences } from "./constants/index.js"

// Hero Section Imports
import { PerspectiveCamera } from "@react-three/drei"
import HackerRoom from "./components/HackerRoom"
import { useMediaQuery } from "react-responsive"
import HeroCamera from "./components/HeroCamera"
import Cuby from "./components/Cuby"
import Stars from "./components/Stars"
import Robo from "./components/Robo"

// Navbar Imports
import { navLinks } from "./constants"

// My Prefessional Journey Imports
import { MyProfessionalJourney } from './constants/index.js';

// Projects Section Imports
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Center,  } from "@react-three/drei"
import { myProjects } from "./constants/index.js"
import DemoComputer from "./components/DemoComputer.jsx"

export { Navbar, Hero, About, Projects, ProfessionalJourney, Contact, Footer, Experience, LogoSection, FeatureCards,
        useState, Globe, THREE, emailjs, useRef, useAlert, Alert, TitleHeader, ContactExperience, Button,
        Canvas, OrbitControls, Developer, CanvasLoader, workExperiences, Suspense, PerspectiveCamera, useMediaQuery, HackerRoom, HeroCamera, Cuby, Stars, Robo, navLinks, MyProfessionalJourney, gsap, useGSAP, myProjects, Center, DemoComputer, 
}




// So there is an issue of flickering in my website
// So now this is one more issue which is being faced. On shopping cart, the Checkout, Get quote and promocode section is fluctuating. Summary - description of issues. On shopping cart, the Checkout, Get quote and promocode section is fluctuating On apply and remove of promocode and it is more noticable. 

// So What i have come across is that there is CLS. When the promocode is applied the Recently Viewd Products and Related items in you cart carousels are shifting and rerendering, which is causing visual issues.

// What I did was Gave a minHeight to the carousels and there were dynamic imports in the code remove them and made it static.





import React, { useEffect, useContext, useState, useRef } from "react";
import Head from "next/head";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

import Base from "../components/layout/component";
import BackNavigation from "../components/back-navigation/component";
import Print from "../components/product/user-actions/print/component";
import ProductCartTile from "../components/cart/product-tile/component";
import CustomButton from "../components/basic/custom-button";
import Footer from "../components/layout/footer";

import { Divider } from '@material-ui/core';

import dynamic from 'next/dynamic';

// Constants
import { SHOPPING_CART, SAVED_FOR_LATER } from "../config/cart/constants";

// Redux slices & services
import {
  deleteItemFromCart,
  updateViewCart,
  updateItemsToCart,
  viewCart,
  saveItemForLater,
  deleteItemFromSaveLater,
  addItemsToCart,
  viewWebCart,
  updateErrors,
  getCalculateFreight,
  viewFullCart,
  setErrorItems
} from "../slices/cartSlice";

import { clearCheckoutobj, resetValidationErrors } from "../slices/checkoutSlice";
import { getAllGroupsWithItems } from "../slices/wishListSlice";
import { getProductsWithAddons, getVersion } from "../slices/productSlice";
import { getItemError } from "../services/order/quickOrder.service";

import reduxStore from "../store/initstore";

// Dynamically imported components (without SSR where needed)
const OrderSummary = dynamic(() => import("../components/cart/order-summary/component"), { ssr: false });
const ProductCarousel = dynamic(() => import("../components/product/carousel/component"));
const RecentlyViewedProducts = dynamic(() => import("../components/product/recentlyviewed/component"));

import { getAllGroupsWithItems } from '../slices/wishListSlice';
import Footer from "../components/layout/footer";

import {
  isArray,
  isEmpty,
  isEmptyJson,
  getAvailability,
  getUrlFromContext,
  refineReqWithHouseCookies,
  getErrorArrayInsideTag,
  goTTop,
  isGreaterThanZero,
  converJsonToQueryParam,
  isLoggedInCheck,
  isIndoffClient,
  fixedToTwoDigit,
  debounce,
  throttle,
  getBrHeaders
} from '../utils/utils';

import { LS, SS } from '../store/webStorage';
import Link from 'next/link';

import { ShareCart } from "../components/cart/share-cart/component";
import { ShareCartWithContact } from "../components/cart/share-cart/share-with-contact/component";

import { isLoggedIn, isBusinessUserLoggedIn } from '../services/auth/auth.service';
// import { DataContext } from "/hoc/withProviders"; 
// import { DataContext } from '-/_app';

import EmailOutlined from '@material-ui/icons/EmailOutlined';
import GroupOutlined from '@material-ui/icons/GroupOutlined';
import Loader from '../components/basic/loader';
import CustomAlert from "../components/basic/alert/component";

import {
  SESSION_NAME_FOR_AUTO_REORDER_ITEMS
} from '../components/layout/pdp/priceview/reorder-subscription/config/fields';

import {
  BrComponent,
  BrPage,
  BrPageContext
} from "@bloomreach/react-sdk";

import { initialize } from "@bloomreach/spa-sdk";
import axios from "axios";

import { useDeviceDetect } from '../hooks/useDeviceDetect';
import {
  mapBrComponents,
  updatePageInfo,
  renderSplitLayout
} from '../services/indexRoute.service';

import {
  getBrUrl,
  getBrOrigin,
  getCssCdnUrl,
  VERSION_VALUE
} from '../config/apiUrl';

import { useMemo } from "react";


import { useMemo } from "react";
import dynamic from "next/dynamic";

import LazyClearanceCart from "../components/product/clearance-cart/lazy-component";
import withProviders from "../hoc/withProviders";

import { getPageProps } from "../utils/appProps/getInitialProps";

import CartId from "../components/cart-id/components";
import globalStore from "../store/globalStore";

import {
  getBrxProperties,
  renderHtmlTags
} from "../utils/basic-utils";

import {
  getDataFromCache,
  setDataInCache
} from "../store/globalCache";

const ShipCalcDetails = dynamic(() => import("../utils/webChannelShipCalcDetails"));


// Utility function to extract item keys
const getItemKeys = (productArray = []) => {
  const keys = [];
  if (Array.isArray(productArray)) {
    productArray.forEach(obj => {
      if (obj !== undefined && obj.itemkey !== undefined) {
        keys.push(obj.itemkey);
      }
    });
  }
  return keys.toString();
};

// Main Component
export default withProviders(reduxStore, function Cart(props) {
  let timer;
  const { headers, configuration, page, loading: propsLoading } = props;

  const pageImpl = initialize({ ...configuration, httpClient: axios }, page);

  const [loading, setLoading] = React.useState({
    flag: propsLoading || false,
    cnt: 0
  });

  const freightResponseStore = useSelector((state) => state.CartSlice.freightResponse);
  const { shippingGroupList, shippingList } = freightResponseStore;

  let cartDataFromStore = useSelector((state) => state.CartSlice.viewCartData);
  const carouselData = useSelector((state) => state.ProductSlice.carouselList);



  let saveLaterData = useSelector((state) =>
    state.CartSlice.webCartData?.webCartLines || []
  );
  
  const errorItems = useSelector((state) => state.CartSlice.errorItems);
  let lastAddedItems = useSelector((state) => state.CartSlice.cartData);
  let cartErrorJson = useSelector((state) => state.CartSlice.errorjson);
  const alertErrorArray = useSelector((state) => state.AlertSlice.alerts);
  
  const { cartHeaderModel: cartData, totalQty } = cartDataFromStore;
  
  const [showAddons, setShowAddons] = React.useState(cartData?.length >= 0);
  
  const dispatch = useDispatch();
  
  const [modalOpen, setModalOpen] = React.useState(false);
  const router = useRouter();
  
  const { isResponsive: isMobileResponsive } = useDeviceDetect({ breakpoint: 768 });
  const { isResponsive: isTabletResponsive } = useDeviceDetect({ breakpoint: 1368 });
  
  // const dataContext = useContext(DataContext);
  
  const [quickOrderError, setQuickOrderError] = useState("");
  const [substituteAvailable, setSubstituteAvailable] = useState(false);
  
  const savedForLaterRef = useRef();
  
  const cartidPhone = props.properties['cartid.summary.phone.no'];
  const cartidThreshold = props.properties['cartid.threshold.for.checkout'];
  
  const [cartDataState, setCartData] = useState({});
  
  let controller = new AbortController();
  
  useEffect(() => {
    updatePageInfo(props);
  }, [props]);
  
  useEffect(() => {
    setCartData(cartDataFromStore);
  }, [cartDataFromStore]);
  
  const getLoyaltyFlag = () => {
    let flag = props?.headers?.flag_loyalty || "";
    if (flag === true || flag === "true") {
      return true;
    }
    return false;
  };
  useEffect(() => {
    if (
      errorItems &&
      Array.isArray(errorItems) &&
      lastAddedItems?.cartHeaderModel?.cartItemsList
    ) {
      let notFoundErrorObjs = [];
      let outofStockErrorObjs = [];
      let quantityErrorObjs = [];
  
      errorItems.forEach((item) => {
        if (item.errorType === "NOT_FOUND") {
          notFoundErrorObjs.push(item);
        } else if (item.errorType === "OUT_OF_STOCK") {
          outofStockErrorObjs.push(item);
        } else if (
          item.errorType === "MIN_QTY_ERROR" ||
          item.errorType === "MAX_QTY_ERROR"
        ) {
          quantityErrorObjs.push(item);
        }
      });
  
      if (
        !isEmpty(notFoundErrorObjs) ||
        !isEmpty(outofStockErrorObjs) ||
        !isEmpty(quantityErrorObjs)
      ) {
        const totalValidItems =
          lastAddedItems?.cartHeaderModel?.cartItemsList?.length || 0;
        const totalErrors =
          notFoundErrorObjs.length + outofStockErrorObjs.length;
  
        const commonErrorMsg = (
          <p className="marginB11">
            {totalValidItems} of {totalValidItems + totalErrors} Products Added
            to Cart:
          </p>
        );
  
        let notFoundError = "";
        let outofStockError = "";
  
        notFoundErrorObjs.forEach((item) => {
          notFoundError += notFoundError ? `, ${item.key}` : `${item.key}`;
        });
  
        outofStockErrorObjs.forEach((item) => {
          outofStockError += outofStockError ? `, ${item.key}` : `${item.key}`;
        });
  
        // Log or render the error if needed
        console.log(commonErrorMsg, notFoundError, outofStockError);
      }
    }
  }, [errorItems, lastAddedItems]);
    //...rest of your component logic
});


// now these r the code snippets found in the viewcart.jsx
useEffect(() => {
    if (
      Array.isArray(errorItems) &&
      errorItems.length &&
      lastAddedItems?.cartHeaderModel?.cartItemsList
    ) {
      let notFoundErrorObjs = [],
          outOfStockErrorObjs = [],
          quantityErrorObjs = [],
          notFoundError = '',
          outOfStockError = '',
          commonErrorMsg = '';
  
      // Categorize errors
      errorItems.forEach(item => {
        switch (item.errorType) {
          case 'NOT_FOUND':
            notFoundErrorObjs.push(item);
            break;
          case 'OUT_OF_STOCK':
            outOfStockErrorObjs.push(item);
            break;
          case 'MIN_QTY_ERROR':
          case 'MAX_QTY_ERROR':
            quantityErrorObjs.push(item);
            break;
        }
      });
  
      // Create strings for NOT_FOUND errors
      notFoundError = notFoundErrorObjs.map(item => item.key).join(', ');
  
      // Create strings for OUT_OF_STOCK errors
      outOfStockError = outOfStockErrorObjs.map(item => item.key).join(', ');
  
      // General product addition summary
      commonErrorMsg += `
        <p>${lastAddedItems.cartHeaderModel.cartItemsList.length} of 
        ${lastAddedItems.cartHeaderModel.cartItemsList.length + notFoundErrorObjs.length + outOfStockErrorObjs.length} 
        products added to cart:</p>`;
  
      // Not found message
      if (notFoundErrorObjs.length) {
        commonErrorMsg += `<p>${notFoundErrorObjs.length > 1
          ? `${notFoundError} are not valid item numbers.`
          : `${notFoundError} is not a valid item number.`}</p>`;
      }
  
      // Out of stock message
      if (outOfStockErrorObjs.length) {
        commonErrorMsg += `<p>${outOfStockErrorObjs.length > 1
          ? `${outOfStockError} are currently out of stock.`
          : `${outOfStockError} is currently out of stock.`}</p>`;
      }
  
      // Quantity errors
      if (!isEmpty(quantityErrorObjs)) {
        quantityErrorObjs.forEach(eachItemError => {
          commonErrorMsg += `<p>${eachItemError.message}</p>`;
        });
      }
  
      // Set the alert message
      setQuickOrderError(
        <CustomAlert
          noIcon={true}
          desc={<div dangerouslySetInnerHTML={{ __html: commonErrorMsg }} />}
          type="error"
          inline={true}
        />
      );
    } else {
      setQuickOrderError('');
    }
  }, [errorItems, lastAddedItems]);

  

  const [shareWithEmail, setShareWithEmail] = React.useState(false);
const [shareWithContacts, setShareWithContacts] = React.useState(false);
const [showShareContextMenu, setShowShareContextMenu] = React.useState(false);

useEffect(() => {
  dispatch(resetValidationErrors());

  let error = SS.getFromSS("QUICK-ORDER-ERROR");
  if (!isEmpty(error)) {
    try {
      error = JSON.parse(error);
      dispatch(setErrorItems(error));
    } catch (e) {
      console.error("Error parsing QUICK-ORDER-ERROR from sessionStorage", e);
    }
  }

  // Remove all "customizePdpItem" related entries from sessionStorage
  for (let i = 0; i < sessionStorage.length; i++) {
    const entryKey = sessionStorage.key(i);
    if (entryKey && entryKey.includes("customizePdpItem")) {
      sessionStorage.removeItem(entryKey);
    }
  }
}, [errorItems, lastAddedItems]);


useEffect(() => {
    LS.removeFromLS('fromCheckoutPage');
    clearTimeout(timer);
  
    dispatch(updateViewCart(props.viewCartResponse));
    dispatch(viewWebCart());
    dispatch(clearCheckoutobj());
  
    SS.removeFromSS("QUICK-ORDER-ERROR");
  
    if (cartDataFromStore) {
      setShowAddons(cartDataFromStore.cartHeaderModel?.cartItemsList?.length > 0);
  
      if (cartDataFromStore.cartHeaderModel?.cartItemsList?.length >= 0) {
        dispatch(
          getProductsWithAddons(
            getItemkeys(cartDataFromStore.cartHeaderModel.cartItemsList),
            "BASIC,PRICE,EXTRAINFO,BASIC_REVIEWS,FLAGS,AVAIL,VARIANTS"
          )
        );
      }
  
      cartDataFromStore.cartHeaderModel?.errors?.forEach((err) => {
        const msg = err?.message?.toLowerCase();
        if (
          err?.additionalInfo === 'substituteavailable' ||
          (msg && msg.includes('out of stock'))
        ) {
          setSubstituteAvailable(true);
        }
      });
    }
  }, [props.viewCartResponse, cartDataFromStore]);
  
  // Get Wishlist Groups
  const getWishlistGroups = () => {
    if (isLoggedIn(props.headers)) {
      dispatch(getAllGroupsWithItems(1, 6));
    }
  };
  
  // Handle Add To Cart Response
  const handleAddToCartResponse = () => {
    dispatch(viewCart());
  };
  
  // Render Addons
  const renderAddons = () => {
    let bundledItems = mergeAddonItems();
    if (bundledItems.length === 0) {
      bundledItems = getAccessoriesItems();
    }
  
    const baseKeys = [];
    const temp = [];
  
    cartDataFromStore?.cartHeaderModel?.cartItemsList?.forEach(prd => {
      baseKeys.push(prd.itemkey);
    });
  
    bundledItems.forEach(pd => {
      if (!baseKeys.includes(pd.itemkey)) {
        temp.push(pd);
      }
    });
  
    const tempItems = temp;
    // You can now return or use tempItems as needed
  };
  const renderRelatedProducts = () => {
    let tempItems = [];
  
    // Filter out out-of-stock items
    temp?.filter(product => product.flagWebOrderOutOfStock === false)
      .forEach(item => {
        tempItems.push(item);
      });
  
    bundledItems = tempItems;
  
    return (
      <div className="recommendedItems">
        {bundledItems.length > 0 && (
          <>
            <h3 className="section_title_h3">Products related to items in your cart</h3>
            <ProductCarousel
              title="Products related to items in your cart"
              catRef="Products related to items in your cart"
              productList={bundledItems.slice(0, bundledItems.length > 24 ? 24 : bundledItems.length)}
              dontShowMiniCart={true}
              loggedIn={isLoggedIn(props.headers)}
              headers={props?.headers}
              page="viewcart"
              handleAddToCartResponse={() => handleAddToCartResponse()}
            />
          </>
        )}
      </div>
    );
  };

  
  const renderCartCarousel = () => {
    return (
      <LazyClearanceCart
        cartData={cartDataFromStore?.cartHeaderModel?.cartItemsList}
        widgetType={props?.properties?.clearanceCart?.widgetType}
        widgetId={props?.properties?.clearanceCart?.widgetId}
        title={props?.properties?.clearanceCart?.title}
      />
    );
  };
  

  const getAccessoriesItems = () => {
    let addons = (carouselData !== undefined && Array.isArray(carouselData)) ? carouselData[0] : undefined;
    let items = [];
  
    if (addons !== undefined) {
      if (!isEmpty(addons["recommendedItems"])) {
        items = items.concat(addons["recommendedItems"]);
      }
      if (!isEmpty(addons["newVersionItems"])) {
        items = items.concat(addons["newVersionItems"]);
      }
      if (!isEmpty(addons["substituteItems"])) {
        items = items.concat(addons["substituteItems"]);
      }
      if (!isEmpty(addons["bundledItems"])) {
        items = items.concat(addons["bundledItems"]);
      }
    }
  
    return items;
  };
  const mergeAddonItems = () => {
    let items = [];
  
    for (let j = 0; j < carouselData.length; j++) {
      let obj = carouselData[j].bundledItems?.length === 0
        ? carouselData[j].recommendedItems
        : carouselData[j].bundledItems;
  
      for (let k = 0; k < obj?.length; k++) {
        let found = items.some(itm =>
          itm.itemkey !== undefined &&
          obj[k].itemkey !== undefined &&
          itm.itemkey === obj[k].itemkey
        );
  
        if (!found) {
          items.push(obj[k]);
        }
      }
    }
  
    return items;
  };
  const getSaveForLaterCount = () => {
    let totalQty = 0;
    saveLaterData.filter(item => {
      if (item.warrantyParentItemKey === undefined) {
        totalQty += item.qty;
      }
    });
    return totalQty;
  };

  const getAddons = (itemkey) => {
    let temp = [...carouselData];
    if (Array.isArray(temp)) {
      let res = temp.filter(obj => obj.itemkey === itemkey);
      if (res?.length > 0) {
        return res[0];
      }
    }
    return null;
  };
  

  const getErrors = (key) => {
    if (Array.isArray(cartErrorsJson)) {
      let res = cartErrorsJson.filter(errObj => errObj.itemkey === key);
      if (res?.length > 0) {
        return res[0];
      }
    }
    return undefined;
  };

  
  <div className="flexWrapContent">
  <section className="productList">
    {/* <OfferNotification /> */}

    {!isEmpty(alertErrorArray) &&
      getErrorArrayInsideTag(alertErrorArray).length > 0 &&
      getErrorArrayInsideTag(alertErrorArray)[0] !== undefined && (
        <CustomAlert
          type="error"
          inline={true}
          desc={getErrorArrayInsideTag(alertErrorArray)}
        />
      )}

    <h3 className="section_title_h3">
      {SHOPPING_CART} {cartDataState?.cartHeaderModel?.totalQty ?? ""}
    </h3>

    {renderShippingMsgsForItem(cartDataState?.cartHeaderModel)}
    {renderCartErrMsgs(cartDataFromStore?.cartHeaderModel)}
    {quickOrderError}

    {cartDataState?.cartHeaderModel?.cartItemsList?.map((item, index) => (
      <>
        {item.warrantyParentItemKey && (
          <ProductCartTile
            key={item.itemkey}
            headers={props.headers}
            cartItems={cartDataFromStore?.cartHeaderModel?.cartItemsList || []}
            showCheckBox={true}
            shippingList={shippingList ? shippingList[index] : undefined}
            page="viewcart"
            addons={getAddons(item.itemkey)}
            showAddons={showAddons}
            position={index + 1}
            item={item}
            warranty={getWarrantyItem(item.itemkey, item.associatedWarrantyItemKey, false)}
            actions={cartActions}
            handleChange={(tempItem, v, cb) => handleQtyUpdate(tempItem, v, cb)}
            handleRemoveItem={() => handleRemoveItem(item)}
            handleSaveForLater={() => handleSaveForLater(item)}
            errors={getErrors(item.itemkey)}
            updateErrorsList={(eItemkey) => checkAndUpdateError(eItemkey)}
            qtyError={getItemError(errorItems, item) ?? ""}
            handleAddToCartResponse={handleAddToCartResponse}
            getLoyaltyFlag={getLoyaltyFlag()}
            carouselData={carouselData}
            properties={props.properties}
          />
        )}
      </>
    ))}
  </section>

  <RecentlyViewedProducts
    headers={props.headers}
    loggedIn={isLoggedIn(props.headers)}
    dontShowMiniCart={true}
    handleAddToCartResponse={handleAddToCartResponse}
    properties={props.properties}
    customUrl={true}
    isMobile={props.mobileFlag}
  />
</div>
