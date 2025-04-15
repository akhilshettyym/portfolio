import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import { addToWishlist, getAllWishlist, getWishlistItems, moveItems, removeItemFromWishlist, renameWishlist } from '../../../slices/wishListSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, Typography, Card, CardHeader, CardContent, Box, Button, Divider } from '@material-ui/core';
import { isEmpty, isArray,getCurrencyFormat } from '../../../utils/utils';
import { useRouter } from 'next/router';
import { addItemsToCart, updateModal } from '../../../slices/cartSlice';
import ProductCartTile from '../product-tile/component';
import {useDeviceDetect} from '../../../hooks/useDeviceDetect';
import { prepareCartDataModel } from '../../../services/order/quickOrder.service';
import Image from 'next/image';
import { getCssCdnUrl } from '../../../config/apiUrl';
const ManageListModel = dynamic(() => import('../manage-list/component'), {ssr: false});
const ShareShoppingList = dynamic(() => import('../shopping-list/share-shoppinglist-modal/component'), {ssr: false});
const BasicModal = dynamic(() => import('../../product/miniCart/component'), {ssr: false});

const WISHLIST_LIMIT=5;

const EditWishlist = (props) => {
    const [openEmailModal, setOpenEmailModal] = useState(false);
    const dispatch = useDispatch();
    const router = useRouter();
    const [selectedGroup, setSelectedGroup] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [wishlistGroup, showWishlistGroup] = useState(false);
    const {isResponsive} = useDeviceDetect({breakpoint: 768});
    const [modalOpen, setModalOpen] = useState(false);
    const [groupItems, setGroupItems] = useState({});
    const [wishlistNames, setWishlistName] = useState([]);
    const [showCombinedOverlay,setShowCombinedOverlay] =useState(false);
    const [showDeleteOverlay,setShowDeleteOverlay] =useState(false);
    const [editWishlist, setEditWishlist] = useState(false);
    const [createNewList, setCreateNewList] = useState(false);
    const [notifyMsg, setNotifyMsg] = useState('');
    const [createResponseFlag, setCreateResponseFlag] = useState(false);
    const [contacts,setContacts]=useState([]);
    const [miniCartOpen, setMiniCartOpen] = useState(false);
    const [notificationMessages, setNotificationMessages] = useState([]);


    
    const handleOpen = () => setModalOpen(true);
    const modalClose = () => {
        setCreateNewList(false);
        setEditWishlist(false);
        setModalOpen(false)
    }
    const wishlistResponseFromStore = useSelector(state => state.WishListSlice.wishlistGroupMap);
    
    useEffect(()=>{
        dispatch(getAllWishlist(handleWishlistResponse));
    },[])

    useEffect(() => {
      handleLoadWishListItems();
    }, [props.wishlistKey]);
    useEffect(()=>{
        if(wishlistResponseFromStore!=undefined && props.wishlistKey!=undefined &&wishlistResponseFromStore[props.wishlistKey]!=undefined){
            let itemsListFromStore = wishlistResponseFromStore[props.wishlistKey]||[];
            setGroupItems(Object.assign({},groupItems,{"items":itemsListFromStore},{'totalItemQty':itemsListFromStore.length}));
        }
    },[wishlistResponseFromStore])

    useEffect(() => {
        if (!isEmpty(notifyMsg)) {
            setNotifyMsg("");
        }
    }, [createResponseFlag]);

    useEffect(() => {
        const messages = [];
        if (groupItems.outOfStockErrorMessage) {
            messages.push(...groupItems.outOfStockErrorMessage);
        }
        if (groupItems?.droppedErrorMessage) {
            messages.push(...groupItems?.droppedErrorMessage);
        }
        setNotificationMessages(messages);
    }, [groupItems])

        const handleEditWishlistResponse = (response) => {
            if (response.status == "success") {
                setGroupItems(response);
            }
        }

        const handleManagelist=(e,name)=>{
          
        }
    
    const printWishlistDetails = () => {
        window.print();
    }

    const emailModalClose = () => {
        setOpenEmailModal(false)
    }
    const handleEmail = () => {
        setOpenEmailModal(true)
    }

const handleWishlistResponse=(response)=>{
    if (response.status == "success") {
        setWishlistName(response.wishlistGroupList);
    }
}

    const renderWishlist = () => {
        return (
            <div className='wishlist'>
                {getWishlistSlice().map((option, index) => {
                    if (groupItems?.wishlistDesc != option?.wishlistDesc) {
                        return (
                            <div key={index} className='optionWishList'>
                                <span className='link' onClick={(e) => moveItem(option.wishlistGroup)}>
                                    {option.wishlistDesc}{" "}
                                </span>
                            </div>
                        )
                    }
                })}
                <div className='flexDisplay' onClick={(e) => handleCreateNewList()}>
                    <i className='fal fa-plus' />
                    <span className='desc'>{"Create list"}</span>
                </div>
            </div>
        )
    }

    const handleCreateNewList = () =>{ 
        setModalOpen(true);
       setCreateNewList(true);
 
    }

    const handleEditList = () => {
        if (groupItems.flagReadOnly == false) {
            setModalOpen(true);
            setEditWishlist(true);
        }
    }

      //testing will change after once done
      const getContactsFromManage=(con)=>{
        console.log("selected sho",con);
        setContacts(con);
    }

    const showNotifyMessage=()=>{
        return <div className='notifySuccess'><span className='message'>{notifyMsg}</span></div>
    }

    const getWishlistSlice=()=>{
        const list = wishlistNames || [];
        if (isArray(list)) {
            if (list.length > WISHLIST_LIMIT) {
                return list.slice(0, WISHLIST_LIMIT);
            }
            
            return list;
        }
        return [];
    }

    const getItemKeys=()=>{
        
        let itemKeys=[];
        selectedItems.forEach(element => {
            itemKeys.push(element.itemKey)
        });
        return itemKeys;
        
    }

    const moveItem = (group,key) => {
        let request = {
            "wishlistKeys":(key==undefined)?selectedGroup.join(","):key,
            "wishlistGroup": group
        };
        dispatch(moveItems(props.wishlistKey, request,handleMoveItemResponse));

    }
    const handleMoveItemResponse=(response)=>{
        // console.log("move response:",response)
        if(response.status=="success"){
            setGroupItems(response);
            setSelectedGroup([])
            setSelectedItems([])
            showWishlistGroup(false);
        }
    }

    const addToList = (wishlistDesc, group, itemKey) => {
        let request = {
            "itemKey": itemKey != undefined ? itemKey : getItemKeys().join(","),
            "qty": 1,
            "wishlistDesc": wishlistDesc
        };
        dispatch(addToWishlist(group, request));
    }

    const renderSharedCnt = () => {
        const { shared, sharedWith, flagReadOnly } = groupItems;
        return <span className={`editShoppingShare link${flagReadOnly ? ' readOnly' : ''}`} onClick={handleEditList}>{shared ? `Shared (${sharedWith})` : 'Private'}</span>;
    }

    const renderHeader = () => {
        return <CardHeader className='Test'
            action={
                <div className="editListHeader flexDisplay">
                    <div className="inlineFlexWrapper" onClick={(e) => printWishlistDetails()}>
                        <i className="fal fa-print"></i>
                        { (!isResponsive) &&  <span>Print</span> }
                    </div>

                    <div className="inlineFlexWrapper" onClick={(e) => handleEmail()}>
                        <i className="fal fa-envelope" aria-hidden="true"></i>
                        { (!isResponsive) &&   <span>Email</span> }
                    </div>

                    {groupItems.flagReadOnly == false && <div className="inlineFlexWrapper">
                      <span className='link' onClick={(e)=>handleEditList()}>
                        <Image src={`${getCssCdnUrl()}images/marage_list.png`}  alt="combineIcon" width="23px" height="23px"></Image>
                      { (!isResponsive) && <span>Manage List</span>}
                        </span>
                    </div>}
                </div>
            }
            subheader={
                <div className='editShareDateText flexDisplay'>
                    <div className='orderBox'>
                        <Typography component="p" variant="caption" color="text.secondary">
                            <div className='inlineFlexWrapper'>
                            <Image className='shareImage' src={`${getCssCdnUrl()}images/shared.png`} alt="combineIcon" width="30px" height="24px"></Image> 
                            {renderSharedCnt()}
                            
                            </div>
                        </Typography>
                    </div>
                    <div className='modifiedDate'>
                        <Typography component='p' variant='caption' color='text.secondary'>
                            {groupItems.flagReadOnly == false ? `Last Modified ${groupItems.lastModified != undefined ? groupItems.lastModified : ""}` : 'Read-Only'}
                        </Typography>
                    </div>
                </div>
            }
        />
    }

    const renderItemsCount = () => {
        return <CardHeader
            action={
                <div className="inlineFlexWrapper">
                    <span className='editSubTotal'>Sub total: </span> <span className='editPrice' >{constructSummary()}</span>
                </div>
            }
            subheader={
                <div className='flexDisplay'>
                    <div className='orderBox'>
                        <Typography component="p" variant="caption" display="block" color="text.secondary">
                        <span className='editSaveText'>
                            {`Saved items (${(groupItems.items!=undefined)?groupItems.items?.length:''})`}
                        </span>
                        </Typography>
                    </div>
                </div>
            }
            className={props.headerClass || "flexDisplay"}
        />
    }

    const constructSummary = () => {
        let itemTotal = 0;
        selectedItems?.map((obj, index) => {
            itemTotal += !isEmpty(obj?.price)?obj?.price?.toFixed(2) * obj.qty:0;
        })
        return (itemTotal>0) ? getCurrencyFormat(itemTotal) : "--.--";

    }

    const handleChange = (e) => {
        if (e.target.checked) {
            let temp = [];
            let list = [];
            groupItems?.items?.forEach(element => {
                if(element.isActive){
                temp.push(element.wishlistKey);
                list.push(element)
                }
            });
            setSelectedGroup(temp);
            setSelectedItems(list);
           
        } else {
            setSelectedGroup([]);
            setSelectedItems([]);
        }

    }

    const onSelectedGroup = (e, item) => {
        if (item != undefined) {
            let temp = [];
            let list = [];
            temp = [...selectedGroup];
            list = [...selectedItems];
            if (e.target.checked == true) {
                if (temp.indexOf(item.wishlistKey) == -1) {
                    temp.push(item.wishlistKey);
                    list.push(item)
                }
            } else {
                if (temp.length > 0) {
                    let index = temp.indexOf(item.wishlistKey);
                    if (index != -1) {
                        temp.splice(index, 1);
                        list.splice(index, 1);
                    }

                }
            }
            setSelectedGroup(temp);
            setSelectedItems(list);
           
        }
    }
    const addAllToCart = () => {
      if (selectedGroup.length == groupItems?.items?.length || selectedGroup.length == 0) {
        // groupItems
        const cartData = prepareCartDataModel(groupItems.items);
        dispatch(addItemsToCart(cartData, 'shopping-list', { catRef: 'Wishlist' }))
          .then((data) => {
            if (data.status == 'success') {
              setMiniCartOpen(true);
            }
          })
          .catch((error) => console.log('Failed to add cart'));
      }
    };

    const addToCart = () => {
      if (selectedGroup.length > 0) {
        const cartData = prepareCartDataModel(selectedItems);
        dispatch(addItemsToCart(cartData, 'shopping-list', { catRef: 'Wishlist' }))
          .then((data) => {
            if (data.status == 'success') {
              setMiniCartOpen(true);
              setSelectedGroup([]);
              setSelectedItems([]);
            }
          })
          .catch((error) => console.log('Failed to add cart'));
      }
    };

    const isWishlistGroupsSelected = () => selectedGroup.length > 0;

    const renderButtonInfo=(value)=>{
        return  !isWishlistGroupsSelected()?<div className='buttonInfo'>
             <Typography variant="subtitle2" className={"combineInfoPopup"}>{value}</Typography>
        </div>:''
    }

    const renderTableHeader = () => {
        return <div className='editWishListHeader'>
         <CardHeader
            action={
                <div className="inlineFlexWrapper">
                    <Button variant="contained" className="blueOutlinedButton" title="Add All Items to Cart" size="small" disabled={!(selectedGroup.length == groupItems?.items?.length || selectedGroup.length==0)} onClick={(e) => addAllToCart()}>Add All Items to Cart</Button>
                </div>
            }
            subheader={
                <div className=' selectRemove flexDisplay'>
                        <Box className='editSelectRemove flexDisplay'>
                        <div className='editSelectCheckBox'>
                            <Checkbox
                                className='selectAll'
                                checked={selectedGroup.length == groupItems?.items?.length}
                                indeterminate={selectedGroup.length > 0 && selectedGroup.length != groupItems?.items?.length}
                                onClick={(e) => handleChange(e)}
                            />
                            <span className='selectalltitle'>Select All</span>
                        </div>
                        {groupItems.flagReadOnly == false && <div className='editIcon'>
                            <Typography
                                component='p'
                                variant='caption'
                                color='text.secondary'
                                onMouseLeave={() => setShowCombinedOverlay(false)}
                                onMouseEnter={() => setShowCombinedOverlay(true)}
                            >
                                <span className={isWishlistGroupsSelected() ? "link" : "link disableLink"}
                                    onClick={(e) => {
                                        if (isWishlistGroupsSelected()) {
                                            setShowCombinedOverlay(false)
                                            showWishlistGroup(!wishlistGroup)
                                        }
                                    }}>
                                    <i className='fa fa-arrows' aria-hidden='true'></i>
                                    {!isResponsive && (<span className='editMoveItem'>{"Move Items"}</span>)}
                                </span>
                                {showCombinedOverlay && renderButtonInfo("Select one or more items to move from this list")}
                            </Typography>
                            <Typography
                                component='p'
                                variant='caption'
                                color='text.secondary'
                                onMouseLeave={() => setShowDeleteOverlay(false)}
                                onMouseEnter={() => setShowDeleteOverlay(true)}
                            >
                                <span className={isWishlistGroupsSelected() ? "link" : "link disableLink"}
                                    onClick={(e) => {
                                        if (isWishlistGroupsSelected()) {
                                            setShowDeleteOverlay(false)
                                            handleRemoveItemsFromWishlist(e)
                                        }
                                    }}>
                                    <i className='fal fa-trash-alt' aria-hidden='true'></i>
                                    {!isResponsive && <span>{"Remove"}</span>}
                                </span>
                                {showDeleteOverlay && renderButtonInfo("Select one or more items to delete  from this list")}
                            </Typography>
                        </div>}
                    </Box>
                </div>
            }
            className={props.headerClass || "flexDisplay"}
        />
        </div>
    }

    const renderFooterTable = () => {
        return <CardHeader
            action={
                <div className="inlineFlexWrapper">
                    <Button variant="contained" className="blueOutlinedButton" title="Add All Items to Cart" size="small" disabled={(selectedGroup.length == groupItems?.items?.length || selectedGroup.length==0)} onClick={(e) => addToCart()}>Add All Items to Cart</Button>
                </div>
            }
            subheader={
                <div className=' selectRemove showFooterTable flexDisplay'>
                        <div className='editSelectCheckBox'>
                        <Checkbox className='selectAll' checked={selectedGroup.length == groupItems?.items?.length} indeterminate={selectedGroup.length > 0 && (selectedGroup.length != groupItems?.items?.length)} onClick={(e) => handleChange(e)} /> <span className='selectalltitle'>{`Selected item(s) (${(selectedGroup.length)})`} </span>
                        </div>
                        <div className="inlineFlexWrapper priceShow">
                            <span className='editSubTotal'>Sub total: </span> <span className='editPrice' >{constructSummary()}</span>
                        </div>
                </div>
            }
            className={props.headerClass || "flexDisplay"}
        />
    }
    const handleLoadWishListItems = () => {
      dispatch(getWishlistItems(props.wishlistKey, handleEditWishlistResponse));
    };

    const handleRemoveItemsFromWishlist = (e) => {
        if (selectedGroup.length > 0) {
            let request = {
                "wishlistKeys": selectedGroup.join(",")
            }
            dispatch(removeItemFromWishlist(props.wishlistKey, request,selectedItems,handleLoadWishListItems));
            setSelectedGroup([]);
            setSelectedItems([]);
        }
    }

    const handleRemoveItemFromSaveLater = (item) => {
        if (!isEmpty(item)) {
            let request = {
                "wishlistKeys": item.wishlistKey
            }
            dispatch(removeItemFromWishlist(props.wishlistKey, request, item, handleLoadWishListItems));
            setSelectedItems([]);
        }
    }

    const handleMoveToCart = (item) => {
      const cartJson = {};
      const jsonArray = [];
      const json = { itemKey: item.itemKey, qty: item.qty > 0 ? item.qty : 1 };

      jsonArray.push(json);

      cartJson['cartItemInputDTOList'] = jsonArray;
      cartJson['moveToCartFlag'] = true;

      dispatch(addItemsToCart(cartJson, 'view-cart', { catRef: 'Wishlist' }))
        .then((data) => {
          if (data.status == 'success') {
            if (data?.cartHeaderModel?.cartItemsList?.length > 0) {
              const modelItem = data?.cartHeaderModel?.cartItemsList[0];
              dispatch(updateModal({ flag: true, item: modelItem, addedQty: cartJson.cartItemInputDTOList[0].qty }));
            }
          }
        })
        .catch((error) => console.log('Failed to add cart'));
    };

    const handleQtyUpdate = (item, value, obj) => {
      let temp = [...selectedItems];
      temp = temp.map((obj) => {
        if (obj.itemKey == item.itemKey) {
          obj.qty = value;
        }
        return obj;
      });
      setSelectedItems(temp);
    };

    const renderItems = (item, showColumnNames, position) => {
      return (
        <>
          <div className='flexDisplay justifySpaceBetween orderItems'>
            <>
              <ProductCartTile
              headers={props.headers}
                position={position}
                cartItems={[]}
                currentGroup={props.wishlistKey}
                showColumnNames={showColumnNames}
                saveToLaterLabel={'Add to Cart'}
                item={item}
                key={item.itemKey}
                handleCheckboxSelection={(e, obj) => onSelectedGroup(e, obj)}
                handleQtyUpdate={(obj, v) => handleQtyUpdate(item, v, obj)}
                handleRemoveItem={() => handleRemoveItemFromSaveLater(item)}
                handleSaveForLater={(modifiedItem) => handleMoveToCart(modifiedItem)}
                checked={selectedGroup.indexOf(item.wishlistKey) != -1}
                wishlistall={getWishlistSlice()}
                handleMoveItem={(group, key) => moveItem(group, key)}
                count={groupItems.items != undefined ? groupItems.items?.length : -1}
                readOnly={groupItems.flagReadOnly}
                properties={props.properties}
              />
              <Divider orientation='horizontal' className='divider horizontal' key={`${item.itemKey}-divider`} />
            </>
          </div>
        </>
      );
    };

    const renderOrderTile = (shipObj) => {
      let temp = [];
      const lineList = [];

      temp = shipObj;

      temp?.forEach((element, index) => {
        lineList.push(
          <Card>
            <CardContent className={'stepperBoxClass'}>
              {renderItems(element, false, index + 1)}
            </CardContent>
          </Card>
        );
      });

      return lineList;
    };

    const sendStatus = (status) => {
      setModalOpen(false);
      setCreateNewList(false);
      setEditWishlist(false);
      setCreateResponseFlag(true);
      setNotifyMsg(status);
      setTimeout(() => {
        setCreateResponseFlag(false);
      }, 5000);
    };

    const renderDroppedOrOutOfStockMessage = () => {
      return (
        <div style={{ backgroundColor: '#e6ecf0', marginBottom: '25px' }}>
          {notificationMessages.map((msg, index) => (
            <p key={index} style={{ padding: `${index <= 0 ? '20' : '0'}px 20px 20px 20px` }} dangerouslySetInnerHTML={{ __html: msg }} />
          ))}
        </div>
      );
    };

    const renderManageList = () => {
      return (
        <ManageListModel
            headers={props.headers}
            properties={props.properties}
          handleOpen={handleOpen}
          modalClose={modalClose}
          title={createNewList ? 'Create New List' : 'Manage List'}
          editFlag={editWishlist}
          createFlag={createNewList}
          editable={false}
          wishlistName={createNewList ? '' : groupItems.wishlistDesc}
          shared={groupItems.shared}
          editListKey={groupItems.wishlistGroup}
          sendStatus={(status) => sendStatus(status)}
          handleManagelist={(e, name) => handleManagelist(e, name)}
          moveItem={selectedGroup?.length > 0 ? true : false}
          handleMoveItems={(group) => moveItem(group)}
        />
      );
    };

    const render = () => {
        return (
          <div className='editContent'>
            {openEmailModal && (<ShareShoppingList properties={props.properties} headers={props.headers}  wishlistKey={props.wishlistKey} closeModal={emailModalClose} />)}
            <div className='backButtonStyle'>
              <a href='/account/home?option=shopping%20lists'><span className='backArrow'>{''}</span>{'Back'}</a>
            </div>
            <h2 className='editHeader'>{groupItems.wishlistDesc != undefined ? groupItems.wishlistDesc : ''}</h2>
            <div className='listShared'>{renderHeader()}</div>
            {renderDroppedOrOutOfStockMessage()}
            {showNotifyMessage()}
            <div className='listCount'>{renderItemsCount()}</div>
            {renderTableHeader()}
            {wishlistGroup && renderWishlist()}
            <CardContent className={'stepperBoxClass'}>{renderItems({}, true)}</CardContent>
            <div className='renderOrder'>{renderOrderTile(groupItems?.items)}</div>
            {!(selectedGroup.length == groupItems?.items?.length || selectedGroup.length == 0) && <div className='showFooter'>{renderFooterTable()}</div>}
            {(createNewList || editWishlist) && renderManageList()}
            {miniCartOpen && (
              <BasicModal
                handleOpen={() => setMiniCartOpen(true)}
                modalClose={() => setMiniCartOpen(false)}
                page={'edit-wishlist'}
                itemKeys={groupItems?.items?.map(item => item.itemKey)}
                open={miniCartOpen}
                headers={props.headers}
                properties={props.properties}
              />
            )}
          </div>
        );
    };

    return render();
}

export default EditWishlist;