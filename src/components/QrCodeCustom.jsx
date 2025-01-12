import React, { useEffect, useState, useContext } from "react";
import { QrCode } from 'react-qrcode-pretty';
import { API_BASE_URL } from "../config";
import qrCode from "../assets/dashboard/qrCode.png";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../context/AuthContext";
import useAxios from "../context/UseAxios";

const QrCodeCustom = () => {
    const [userData, setUserData] = useState({});
    const api = useAxios();

    useEffect(() => {
        const userDetails = async () => {
            const response = await api.get(`${API_BASE_URL}accounts/userdata/`);
            if (response.status === 200) {
                setUserData(response.data);
                console.log(response.data.pass_type)
                console.log(response.data);
            } else {
                console.log("error");
            }
        };
        userDetails();
    }, []);

    const valuesUsed = JSON.stringify({
        pass_id: `${userData.pass_id}`,
        email: `${userData.email}`,
        name: userData.first_name + " " + userData.last_name
    });

    if (!userData.pass_id) {
        return null;
    }
    // const valuesUsed = `"pass_id":${userData.pass_id},\n"Email":${userData.email},\n"name":${userData.first_name}${userData.last_name}`;

    return (
        <>
         <QrCode
                value={valuesUsed}
                size={180}
                variant={{
                    eyes: 'gravity',
                    body: 'rounded'
                }}
                color={{
                    eyes: '#1a1c1e',
                    body: '#181a1b'
                }}
                padding={5}
                margin={0}
                bgColor='#fafafa'
                bgRounded
                bgRadius={10}
                divider
            />
        </>
    );
};

export default QrCodeCustom;

// import QRCode from 'react-qr-code';

// const QRCodeCustom = () => {
//     const [userData, setUserData] = useState({});
//     const api = useAxios();

//     useEffect(() => {
//         const userDetails = async () => {
//             const response = await api.get(`${API_BASE_URL}accounts/userdata/`);
//             if (response.status === 200) {
//                 setUserData(response.data);
//                 console.log(response.data.pass_type)
//                 console.log(response.data);
//             } else {
//                 console.log("error");
//             }
//         };
//         userDetails();
//     }, []);

//     return (
//         <QRCode
//             value={userData.coupon_code}
//             size={200}
//             style={{ height: "auto", maxWidth: "100%", width: "100%" }}
//             viewBox={`0 0 256 256`}
//             level="H"
//             className="mb-4"
//         />
//     );
// };

// export default QRCodeCustom;

