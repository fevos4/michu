import React from "react";
import Contact from "../Components/Contact";



const Privacy = () =>{
  

    return(
        <div>
            <div className="bg-white  p-10 lg:p-8 w-full justify-between ">
     
     <header className=" text-center ">
       <h1 className="text-2xl lg:text-4xl font-bold text-[#00A551]">Privacy Policy for Endode Laundry Application</h1>
       <h1>Effective Date: [September 3, 2024]</h1>
     </header>

    
     <div className="max-w-screen-lg mx-auto mt-8">
     <h2 className="text-3xl mb-2 font-boldi ">1. Introduction</h2>
       
       <p className="lg:text-lg mb-8 font-lighti text-sm">
       Welcome to Endode, a laundry application developed by [Your Company Name]. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our application.
       </p>

       <h2 className="text-3xl mb-2 font-boldi ">2. Information We Collect</h2>
       <h2 className="text-2xl mb-2 font-boldi ">2.1 Personal Information </h2>
       
       <p className="lg:text-lg mb-2 font-lighti text-sm">
       We may collect personal information that you provide directly to us when you register for an account, use our services, or communicate with us. This information may include: </p>
       <li className="font-lighti">Name</li>
       <li className="font-lighti">Email address</li>
       <li className="font-lighti">Phone Number</li>
       <li className="font-lighti">Payment information (e.g., credit card details)</li>
       <li className="font-lighti">Delivery Address</li>

       <h2 className="text-2xl mb-2 mt-2 font-boldi ">2.2 Usage Data  </h2>
     <p className="lg:text-lg mb-2 font-lighti text-sm">We automatically collect certain information when you use the application, including:</p>
     <li className="font-lighti">Device information (e.g., IP address, device type, operating system)</li>
     <li className="font-lighti">Log data (e.g., access times, pages viewed, application usage)</li>
     <li className="font-lighti">Location data (if you grant permission)</li>
     
     <h2 className="text-2xl mb-2 mt-2 font-boldi ">2.3 Cookies and Tracking Technologies </h2>
     <p className="lg:text-lg mb-2 font-lighti text-sm">We use cookies and similar tracking technologies to track the activity on our application and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>

     <h2 className="text-3xl mb-2 font-boldi ">3. How We Use Your Information</h2>
     <p className="lg:text-lg mb-2 font-lighti  text-sm">We use the information we collect for various purposes, including:</p>
     <li className="font-lighti">To provide and maintain our services</li>
     <li className="font-lighti">To process transactions and send you related information</li>
     <li className="font-lighti">To communicate with you, including sending updates and promotional materials</li>
     <li className="font-lighti">To monitor and analyze usage and trends to improve your experience</li>
     <li className="font-lighti">To detect, prevent, and address technical issues</li>

     <h2 className="text-3xl mb-2 mt-2 font-boldi ">4. Sharing Your Information</h2>
     <p className="lg:text-lg mb-2 font-lighti text-sm">We may share your information with third parties in the following circumstances:</p>
     <li className="font-lighti">With service providers who perform services on our behalf (e.g., payment processing, data analysis)</li>
     <li className="font-lighti">With your consent, such as when you agree to share your information with third parties for their own marketing purposes</li>
     <li className="font-lighti">To comply with legal obligations, such as responding to a subpoena or court order</li>
     <li className="font-lighti">To protect and defend our rights and property</li>

     <h2 className="text-3xl mb-2 mt-2 font-boldi ">5. Data Security</h2>
     <p className="lg:text-lg mb-2 font-lighti text-sm">We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure.</p>
     <h2 className="text-3xl mb-2 mt-2 font-boldi ">6. Your Data Protection Rights</h2>
     <p className="lg:text-lg mb-2 font-lighti text-sm">Depending on your location, you may have the following rights regarding your personal information:</p>
     <li className="font-lighti">The right to access – You have the right to request copies of your personal data.</li>
     <li className="font-lighti">The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
     <li className="font-lighti">The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
     <li className="font-lighti">The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
     <li className="font-lighti">The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
     <li className="font-lighti">The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
     
     <h2 className="text-3xl mb-2 mt-2 font-boldi ">7. Changes to This Privacy Policy</h2>
      <p  className="lg:text-lg mb-2 font-lighti text-sm">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
     <h2 className="text-3xl mb-2 mt-2 font-boldi ">8. Contact Us</h2>  
     <p className="lg:text-lg mb-2 font-lighti text-sm">If you have any questions about this Privacy Policy, please contact us at:</p>
     <li className="font-lighti">Email: washlinkplc@gmail.com</li>
     <li className="font-lighti">Address: Washlink GCS plc, Bole, Djibouti street. </li>
     
     </div>
    
     
   </div>
   <Contact />
        </div>
        
      
    )
}

export default Privacy;