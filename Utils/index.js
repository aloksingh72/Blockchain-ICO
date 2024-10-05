export const convertTime =()=>{
    const date = new Date(time);
    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    return formattedDate;
};
export const shortAddress = (address)=> `${address?.slice(0,4)}...${address?.slice(address.length - 4)}`;