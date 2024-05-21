import React, { useContext, useState } from "react";
import "./Add.css";
import { assets, url } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { StoreContext } from "../../Context/StoreContext";

const Add = () => {
  const {token} =  useContext(StoreContext)
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "other",
    brand: "other"
  });

  //   const [image, setImage] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("brand", data.brand);
    // formData.append("image", image);
    const formDataObj = {};
    formData.forEach((value, key) => {
      formDataObj[key] = value;
    });
    console.log({formDataObj});
  //   if (token) {
  //     await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
  // }
    const response = await axios.post(`${url}/api/food/add`, formDataObj, { headers: { token } });
    console.log("diamond", response);
    if (response.data.success) {
      toast.success(response.data.message);
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
        brand: ""
      });
      //   setImage(false);
    } else {
      toast.error(response.data.message);
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("name and values", name, value);
    setData((data) => ({ ...data, [name]: value }));
  };

  return (
    <div className="add">
      <form className="flex-row" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload image</p>
          <label htmlFor="image">
            <img src={assets.upload_area} alt="" />
          </label>
          <input
            // onChange={(e) => {
            //   setImage(e.target.files[0]);
            // }}
            type="file"
            id="image"
            // hidden
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input
            name="name"
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            placeholder="Type here"
            required
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            name="description"
            onChange={onChangeHandler}
            value={data.description}
            type="text"
            rows={6}
            placeholder="Write content here"
            required
          />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select name="category" onChange={onChangeHandler}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product Price</p>
            <input
              type="Number"
              name="price"
              onChange={onChangeHandler}
              value={data.price}
              placeholder="$25"
            />
          </div>
          <div className="add-price flex-col">
            <p>BRAND</p>
            <select name="brand" onChange={onChangeHandler}>
              <option value="Boat">Boat</option>
              <option value="Rummy">Rummy</option>
              <option value="MamaEarth">MamaEarth</option>
              <option value="Amazon">Amazon</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <button type="submit" className="add-btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
