import React, { useState } from 'react'
import '../Faqs/Faqs.css'
import {BsArrowRightShort, BsArrowDownShort} from 'react-icons/bs'

const Faqs = () => {
    const [activeTab, setActiveTab] = useState();
    const toogleTab = (tab) => {
        if(activeTab === tab){
            setActiveTab(0);
        }else{
            setActiveTab(tab);
        }
    }
  return (
    <div className='faqs-main'>
      <h2>FAQs</h2>
      <div className="faq-content">
         <div className="each-faq">
            <button onClick={() => toogleTab(1)}>
            <p>How do I track my order?</p>
            {
                activeTab ===1 ? (
                    <BsArrowDownShort className='arrow'/>
                ) : (
                     <BsArrowRightShort className='arrow'/>
                )
            }
            </button>
            {
                activeTab ===1 && (
                    <div className="answer">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                )
            }
         </div>

         <div className="each-faq">
            <button onClick={() => toogleTab(2)}>
            <p>How do I get refund?</p>
            {
                activeTab === 2 ? (
                    <BsArrowDownShort className='arrow'/>
                ) : (
                     <BsArrowRightShort className='arrow'/>
                )
            }
            </button>
            {
                activeTab === 2 && (
                    <div className="answer">
                    <p>Refunds are subjected to conditions and would differ on a case to case basis. </p>
                    </div>
                )
            }
         </div>

         <div className="each-faq">
            <button onClick={() => toogleTab(3)}>
            <p>How to cancel my order ?</p>
            {
                activeTab === 3 ? (
                    <BsArrowDownShort className='arrow'/>
                ) : (
                     <BsArrowRightShort className='arrow'/>
                )
            }
            </button>
            {
                activeTab === 3 && (
                    <div className="answer">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                )
            }
         </div>

         <div className="each-faq">
            <button onClick={() => toogleTab(4)}>
            <p>What do you have to sell?</p>
            {
                activeTab === 4 ? (
                    <BsArrowDownShort className='arrow'/>
                ) : (
                     <BsArrowRightShort className='arrow'/>
                )
            }
            </button>
            {
                activeTab === 4 && (
                    <div className="answer">
                    <p>We are bringing in our fold traditional, native, healthy and unique fresh beverages and drinks to be delivered at your doorstep.</p>
                    </div>
                )
            }
         </div>

         <div className="each-faq">
            <button onClick={() => toogleTab(5)}>
            <p>Where are the products prepared?</p>
            {
                activeTab === 5 ? (
                    <BsArrowDownShort className='arrow'/>
                ) : (
                     <BsArrowRightShort className='arrow'/>
                )
            }
            </button>
            {
                activeTab === 5 && (
                    <div className="answer">
                    <p>The products are prepared at the place where they have originated from or are well known and famous. Yes, if your choice is Halwa then it is obviously from Tirunelveli District.</p>
                    </div>
                )
            }
         </div>

         <div className="each-faq">
            <button onClick={() => toogleTab(6)}>
            <p>How about packing?</p>
            {
                activeTab === 6 ? (
                    <BsArrowDownShort className='arrow'/>
                ) : (
                     <BsArrowRightShort className='arrow'/>
                )
            }
            </button>
            {
                activeTab === 6 && (
                    <div className="answer">
                    <p>Packing is our extreme concern. We take all steps to have your products delivered in a perfect and hygienic condition without any damage.</p>
                    </div>
                )
            }
         </div>

         <div className="each-faq">
            <button onClick={() => toogleTab(7)}>
            <p>Do you deliver outside India?</p>
            {
                activeTab === 7 ? (
                    <BsArrowDownShort className='arrow'/>
                ) : (
                     <BsArrowRightShort className='arrow'/>
                )
            }
            </button>
            {
                activeTab === 7 && (
                    <div className="answer">
                    <p>Milk-based products are not eligible for international delivery. We have partnered with DHL to deliver our International orders.</p>
                    </div>
                )
            }
         </div>

         <div className="each-faq">
            <button onClick={() => toogleTab(8)}>
            <p>How to contact you for further enquiries?</p>
            {
                activeTab === 8 ? (
                    <BsArrowDownShort className='arrow'/>
                ) : (
                     <BsArrowRightShort className='arrow'/>
                )
            }
            </button>
            {
                activeTab === 8 && (
                    <div className="answer">
                    <p>You can contact through the phone number and email provided in the footer of the website.</p>
                    </div>
                )
            }
         </div>

         <div className="each-faq">
            <button onClick={() => toogleTab(9)}>
            <p>Can I place bulk orders? </p>
            {
                activeTab === 9 ? (
                    <BsArrowDownShort className='arrow'/>
                ) : (
                     <BsArrowRightShort className='arrow'/>
                )
            }
            </button>
            {
                activeTab === 9 && (
                    <div className="answer">
                    <p>Yes. You can place bulk orders for any products that are available on our website.</p>
                    </div>
                )
            }
         </div>

         <div className="each-faq">
            <button onClick={() => toogleTab(10)}>
            <p>How to cancel my order ?</p>
            {
                activeTab === 10 ? (
                    <BsArrowDownShort className='arrow'/>
                ) : (
                     <BsArrowRightShort className='arrow'/>
                )
            }
            </button>
            {
                activeTab === 10 && (
                    <div className="answer">
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                )
            }
         </div>

      </div>
    </div>
    
  )
}

export default Faqs