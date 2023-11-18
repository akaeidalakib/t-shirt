import React from 'react';
import Link from 'next/link'
const Products = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="/images.jpg" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">t shirt</h2>
                    <p>you can custmize this t shirt</p>
                    <div className="card-actions">
                        <Link href="/product">
                            <button className="btn btn-primary">Customize</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;