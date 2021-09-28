import React from "react";
import Navigation from "./Navigation";
import style1 from './homePage.module.css';
import Footer from "./Footer";
import Product from "./Product";

function ContactPage()
{
    return(
        <>
        <Navigation/>
        <div className = {style1.container}>Hello this is Contact Page.<p><hr></hr></p><p>You may reach out to any of these coordinators for enquiry and compalint registration.</p></div>
        <table class={style1.table}>
            <tr className = {style1.tr}>
                <th className = {style1.th}>Designation</th>
                <th>|</th>
                <th className = {style1.th}>Contact No</th>
            </tr>
            <tr className = {style1.tr}>
                <td className = {style1.td}>Mr. Sharma</td>
                <th>|</th>
                <td className = {style1.td}>678XXX99</td>
            </tr>
            <tr className = {style1.tr}>
                <td className = {style1.td}>Mr. Baweja</td>
                <th>|</th>
                <td className = {style1.td}>922XXX99</td>
            </tr>
            <tr className = {style1.tr}>
                <td className = {style1.td}>Ms. Dixit</td>
                <th>|</th>
                <td className = {style1.td}>678XXX11</td>
            </tr>
            <tr className = {style1.tr}>
                <td className = {style1.td}>Mrs. Khurana</td>
                <th>|</th>
                <td className = {style1.td}>999XXX99</td>
            </tr>
            <tr className = {style1.tr}>
                <td className = {style1.td}>Ms. Verma</td>
                <th>|</th>
                <td className = {style1.td}>111XXX99</td>
            </tr>
            <tr className = {style1.tr}>
                <td className = {style1.td}>Mr. Kohli</td>
                <th>|</th>
                <td className = {style1.td}>888XXX99</td>
            </tr>
            <tr className = {style1.tr}>
                <td className = {style1.td}>Mr. Peters</td>
                <th>|</th>
                <td className = {style1.td}>777XXX99</td>
            </tr>
        </table>
        <div className = {style1.container}>Thank you for contacting.<p>You may reach out to us at <Product name = "xyz@redmail.com"/></p></div>
        
        <Footer/>
        </>
    );
}
export default ContactPage;