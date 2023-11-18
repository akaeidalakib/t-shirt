"use client"
import ResizableBox from "@/components/resizableBox";
import { useState, useRef } from "react";
const Product = () => {
    let arr = ['/tt.webp', '/tt1.webp', '/tt2.png', '/tt3.png', '/tt.webp'];
    const inputRef = useRef(null);
    const [image, setImage] = useState(arr[0]);
    const [createObjectURL, setCreateObjectURL] = useState(null);
    // upload logo function
    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
            const i = event.target.files[0];
            setCreateObjectURL(URL.createObjectURL(i));
        }
    };
    // clear logo function
    const clearLogo = async () => {
        inputRef.current.value = null;
        setCreateObjectURL(null)
    };
    return (
        <div class="grid grid-cols-2 md:grid-cols-1">
            <div className="flex justify-center relative">
                {/*product image and custom logo section start */}
                <div class="relative bg-black">
                    <img className="object-cover"
                        src={image} />
                    <div class="absolute border border-red-500 w-[30%] h-[30%] left-[33.333333%] top-[20%]">
                        <ResizableBox createObjectURL={createObjectURL} />
                    </div>
                </div>
                {/* end */}
            </div>

            {/* 2nd cols start */}
            <div>
                <div class="grid grid-cols-5 md:grid-cols-3">
                    {
                        arr.map((im, index) => (
                            <button type="button" key={index} className="p-2 w-[100px] h-[100px]">
                                <img className="object-cover"
                                    onClick={() => setImage(im)}
                                    src={im} />

                            </button>
                        ))
                    }
                </div>
                <div>
                    <ul className="menu p-2 bg-base-100">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                {/* Image gellery */}
                <div>
                    <img className="w-32 h-20" src={createObjectURL ? createObjectURL : "/default-logo.png"} />
                    <h4>Select Image</h4>
                    <input ref={inputRef} type="file" name="myImage" onChange={uploadToClient} />
                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={clearLogo}
                    >
                        Clear logo
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;