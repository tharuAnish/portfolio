import React from "react";
import { FaLinkedin, FaGithub, FaMailBulk, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'
function Footer() {
    return (
        <div className="bg-theme w-screen flex justify-center">
            <div className="md:w-full w-1/2">
                <div className=" p-10 font-mont text-center">
                    <p className="text-gray-50 pb-5">Designed and Developed By</p>

                    <div className="h-1 border-2 border-white border-dotted"></div>

                    <div className="flex text-white w-full justify-between py-3">
                        <FaLinkedin />
                        <FaGithub />
                        <FaMailBulk />
                        <FaTwitter />
                        <FaInstagram />
                        <FaFacebook />
                    </div>

                    <div className="h-1 border-2 border-gray-50 border-dotted"></div>

                    <p className="text-gray-50 mt-5">Anish Tharu</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
