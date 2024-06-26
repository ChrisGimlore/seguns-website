"use client";
import React, { useState } from "react";
import Link from "next/link";
import { supabase } from "../data/supabase";
import { EnvelopeIcon } from "@heroicons/react/16/solid";

const Footer = () => {
  const style = {
    icon: `h-7 w-7 flex`,
  };

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const addEmail = async (e: any) => {
    const { data, error } = await supabase
      .from("mailing_list")
      .insert({ email: email });
    if (data) {
      setSuccess(true);
      setEmail("");
    } else if (error) {
      console.log("there has been an error adding your email", error);
    }
  };

  return (
    <footer className="flex relative w-full bottom-0 lg:justify-between flex-col lg:flex-row items-center justify-center">
      <form onSubmit={(e) => addEmail(e)} className="flex p-5 gap-5 w-full">
        <div className="flex p-5 gap-5 w-full flex-col lg:flex-row">
          <h1 className="text-gray-600 text-sm">
            Sign up for the mailing list:
          </h1>

          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="rounded-sm border-none outline-none bg-gray-800 text-gray-500 indent-3"
            type="email"
          />
          {/* <EnvelopeIcon className="h-5 w-5 text-sm text-white" /> */}
        </div>
      </form>

      {success && (
        <>
          <h1 className="text-white text-sm flex w-full h-full">
            Thank you for signing up to the mailing list! you will be kept up to
            date with releases and show dates!
          </h1>
        </>
      )}

      <div className="flex w-full items-center justify-center lg:justify-end">
        <div className="flex justify-between gap-5 p-5 mr-3 h-full items-end">
          <Link href={`https://twitter.com/segunaniyi`}>
            <svg
              className={style.icon}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                stroke="none"
                strokeWidth="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M34.21875,5.46875c-5.98047,0 -10.84375,4.86328 -10.84375,10.84375c0,0.35938 0.08984,0.71094 0.125,1.0625c-7.39453,-0.70703 -13.93359,-4.26953 -18.375,-9.71875c-0.20703,-0.26172 -0.52734,-0.40234 -0.86328,-0.37891c-0.33203,0.02344 -0.62891,0.21484 -0.79297,0.50391c-0.93359,1.60547 -1.46875,3.45313 -1.46875,5.4375c0,2.40234 0.85938,4.60156 2.1875,6.40625c-0.25781,-0.11328 -0.53906,-0.17578 -0.78125,-0.3125c-0.30859,-0.16406 -0.67969,-0.15625 -0.98047,0.02344c-0.30078,0.17969 -0.48438,0.50391 -0.48828,0.85156v0.125c0,3.68359 1.90625,6.88281 4.71875,8.84375c-0.03125,-0.00391 -0.0625,0.00781 -0.09375,0c-0.34375,-0.05859 -0.69141,0.0625 -0.92187,0.32422c-0.23047,0.26172 -0.30469,0.625 -0.20312,0.95703c1.11719,3.47266 3.96875,6.125 7.5,7.09375c-2.8125,1.67188 -6.07422,2.65625 -9.59375,2.65625c-0.76172,0 -1.49219,-0.03906 -2.21875,-0.125c-0.46875,-0.0625 -0.91797,0.21094 -1.07422,0.65625c-0.16016,0.44531 0.01563,0.94141 0.41797,1.1875c4.51172,2.89453 9.86719,4.59375 15.625,4.59375c9.33203,0 16.65234,-3.89844 21.5625,-9.46875c4.91016,-5.57031 7.46875,-12.80469 7.46875,-19.5625c0,-0.28516 -0.02344,-0.5625 -0.03125,-0.84375c1.83203,-1.40234 3.46875,-3.04687 4.75,-4.96875c0.25391,-0.37109 0.22656,-0.86719 -0.06641,-1.21094c-0.28906,-0.34375 -0.77734,-0.44922 -1.18359,-0.25781c-0.51562,0.23047 -1.11719,0.25391 -1.65625,0.4375c0.71094,-0.94922 1.32031,-1.97266 1.6875,-3.125c0.125,-0.39453 -0.01172,-0.82812 -0.33594,-1.08594c-0.32422,-0.25391 -0.77734,-0.28516 -1.13281,-0.07031c-1.70703,1.01172 -3.59766,1.72266 -5.59375,2.15625c-1.9375,-1.8125 -4.48828,-3.03125 -7.34375,-3.03125zM34.21875,7.46875c2.55078,0 4.85547,1.08984 6.46875,2.8125c0.24219,0.25 0.59766,0.35547 0.9375,0.28125c1.30469,-0.25781 2.54297,-0.63672 3.75,-1.125c-0.69531,0.9375 -1.55469,1.73828 -2.5625,2.34375c-0.45703,0.22266 -0.67187,0.75 -0.50391,1.23047c0.16406,0.47656 0.66406,0.75391 1.16016,0.64453c1,-0.12109 1.89063,-0.52734 2.84375,-0.78125c-0.85547,0.92578 -1.79297,1.76172 -2.8125,2.5c-0.27734,0.20313 -0.42969,0.53125 -0.40625,0.875c0.01563,0.40625 0.03125,0.80859 0.03125,1.21875c0,6.25 -2.39844,13.03516 -6.96875,18.21875c-4.57031,5.18359 -11.28125,8.8125 -20.0625,8.8125c-3.98828,0 -7.75391,-0.88281 -11.15625,-2.4375c4.21875,-0.32422 8.10938,-1.81641 11.25,-4.28125c0.32813,-0.26172 0.45703,-0.69922 0.32422,-1.09766c-0.13281,-0.39844 -0.5,-0.67187 -0.91797,-0.68359c-3.29687,-0.05859 -6.05859,-1.97656 -7.53125,-4.6875c0.05469,0 0.10156,0 0.15625,0c0.98828,0 1.96484,-0.125 2.875,-0.375c0.4375,-0.12891 0.73828,-0.53516 0.72266,-0.99219c-0.01562,-0.45703 -0.33984,-0.84766 -0.78516,-0.94531c-3.55859,-0.71875 -6.22656,-3.61719 -6.84375,-7.21875c1.00781,0.34766 2.03906,0.62109 3.15625,0.65625c0.45703,0.02734 0.87109,-0.25781 1.01172,-0.69141c0.14063,-0.43359 -0.03125,-0.91016 -0.41797,-1.15234c-2.375,-1.58984 -3.9375,-4.29687 -3.9375,-7.375c0,-1.14062 0.29688,-2.1875 0.6875,-3.1875c5,5.48828 12,9.13281 19.90625,9.53125c0.3125,0.01563 0.61719,-0.11328 0.82031,-0.35156c0.20313,-0.24219 0.28125,-0.5625 0.21094,-0.86719c-0.15234,-0.64844 -0.25,-1.33594 -0.25,-2.03125c0,-4.89844 3.94531,-8.84375 8.84375,-8.84375z"></path>
                </g>
              </g>
            </svg>
          </Link>
          <Link href={`https://www.instagram.com/segunaniyi/`}>
            <svg
              className={style.icon}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                stroke="none"
                strokeWidth="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z"></path>
                </g>
              </g>
            </svg>
          </Link>
          <Link
            href={`https://open.spotify.com/artist/3G3FdpTPfLnQbiZoBi6ofI?si=YAzgLMoDSriFbMjgDB0zQw`}
          >
            <svg
              className={style.icon}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                stroke="none"
                strokeWidth="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M25,1.99023c-12.73313,0 -23.00977,10.27663 -23.00977,23.00977c0,12.73313 10.27663,23.00977 23.00977,23.00977c12.73313,0 23.00977,-10.27663 23.00977,-23.00977c0,-12.73313 -10.27663,-23.00977 -23.00977,-23.00977zM25,4.00977c11.65087,0 20.99023,9.33937 20.99023,20.99023c0,11.65087 -9.33937,20.99023 -20.99023,20.99023c-11.65086,0 -20.99023,-9.33937 -20.99023,-20.99023c0,-11.65086 9.33937,-20.99023 20.99023,-20.99023zM21.93359,14c-5.93275,0 -10.39722,1.02745 -10.61523,1.07813h-0.00195v0.00195c-1.60088,0.37379 -2.61045,1.99926 -2.23828,3.59961c0.37216,1.60179 1.9974,2.60885 3.59766,2.24219h0.00781l0.00586,-0.00195c-0.11361,0.02771 0.04983,-0.01188 0.16992,-0.03711c0.1201,-0.02523 0.29741,-0.06019 0.52734,-0.10352c0.45987,-0.08666 1.12748,-0.20295 1.95898,-0.31836c1.66302,-0.23082 3.98002,-0.46094 6.58789,-0.46094h0.0625c4.31289,0.0059 10.5103,0.66778 15.48438,3.58789h0.00195v0.00195c0.47243,0.27544 0.99914,0.41016 1.51563,0.41016c1.02905,0 2.03473,-0.53739 2.58984,-1.48242c0.83251,-1.4178 0.35006,-3.27198 -1.06836,-4.10547c-6.24316,-3.66535 -13.51061,-4.40497 -18.51562,-4.41211zM21.93359,16h0.07031c4.80493,0.007 11.74778,0.75846 17.50195,4.13672c0.48758,0.28651 0.64291,0.88294 0.35742,1.36914c-0.19089,0.32497 -0.52229,0.49414 -0.86523,0.49414c-0.17012,0 -0.33965,-0.04186 -0.50391,-0.13672l-0.00391,-0.00195c-5.47713,-3.2139 -11.98613,-3.8552 -16.49219,-3.86133h-0.06445c-2.72513,0 -5.12733,0.23979 -6.86133,0.48047c-0.867,0.12034 -1.56826,0.24 -2.05664,0.33203c-0.24419,0.04602 -0.43517,0.0853 -0.56836,0.11328c-0.12518,0.0263 -0.1162,0.02249 -0.2168,0.04688c-0.55574,0.12734 -1.07724,-0.19588 -1.20508,-0.74609c-0.12769,-0.54908 0.19606,-1.07032 0.74414,-1.19922c0.15198,-0.03532 4.46281,-1.02734 10.16406,-1.02734zM21.99219,22.00195c-2.50636,0.02098 -4.67021,0.25518 -6.25,0.49609c-1.57979,0.24092 -2.47713,0.45874 -2.76563,0.54102c-1.43126,0.40584 -2.27948,1.92274 -1.87305,3.35547c0.40774,1.43417 1.92433,2.27819 3.35547,1.87109l0.00586,-0.00195h0.00391c0.02594,-0.0061 0.06646,-0.01556 0.11914,-0.02734c0.10537,-0.02356 0.26083,-0.05549 0.46094,-0.0957c0.40021,-0.08042 0.97723,-0.18906 1.69141,-0.29687c1.42835,-0.21564 3.40223,-0.43367 5.58203,-0.45312c3.86324,-0.03406 8.24549,0.53366 12.52148,3.19727c0.44588,0.27986 0.949,0.41406 1.4375,0.41406c0.90575,0 1.79649,-0.4593 2.30859,-1.2793c0.78818,-1.26391 0.39548,-2.95709 -0.86914,-3.74414c-5.38464,-3.35471 -11.16004,-4.01442 -15.72852,-3.97656zM22.00977,24c4.36152,-0.03614 9.71494,0.59849 14.6543,3.67578c0.34538,0.21495 0.44434,0.6422 0.22852,0.98828c-0.1399,0.22401 -0.37108,0.33789 -0.61133,0.33789c-0.1315,0 -0.25688,-0.03328 -0.375,-0.10742l-0.00195,-0.00195c-4.69126,-2.92315 -9.52356,-3.53789 -13.59961,-3.50195c-2.3022,0.02055 -4.36389,0.2502 -5.86328,0.47656c-0.7497,0.11318 -1.3581,0.22629 -1.78711,0.3125c-0.2145,0.0431 -0.38409,0.07867 -0.50391,0.10547c-0.05991,0.0134 -0.10713,0.02482 -0.14258,0.0332c-0.03545,0.0084 0.02043,-0.0098 -0.10547,0.02734l0.00976,-0.00391c-0.38286,0.10891 -0.7745,-0.10631 -0.88476,-0.49414c-0.11141,-0.39274 0.10236,-0.77393 0.49414,-0.88477h0.00195c-0.01149,0.0033 1.01732,-0.2592 2.51953,-0.48828c1.50217,-0.22904 3.57615,-0.45459 5.9668,-0.47461zM22.5,29.00195c-4.35889,0.001 -7.58571,1.06047 -7.79102,1.12891c-1.29899,0.43226 -2.0129,1.86364 -1.58008,3.16211c0.43299,1.29897 1.86445,2.01973 3.16602,1.57813l-0.01562,0.00586c0.10018,-0.0322 0.1595,-0.05316 0.46289,-0.13477c0.30339,-0.08161 0.74961,-0.19093 1.30664,-0.30078c1.11405,-0.2197 2.67605,-0.43897 4.45117,-0.43945c4.33693,-0.00096 7.29902,1.03755 9.61328,2.58008v-0.00195c0.42377,0.28307 0.90995,0.42188 1.38477,0.42188c0.80665,0 1.60477,-0.39851 2.08203,-1.11523c0.75855,-1.13866 0.44473,-2.70502 -0.69336,-3.46484c-3.6452,-2.42978 -7.74661,-3.42198 -12.38672,-3.41992zM22.5,31.00195c4.35989,-0.0019 7.99455,0.89577 11.27734,3.08398c0.23828,0.16046 0.29769,0.45466 0.13867,0.69336c-0.10073,0.15127 -0.25462,0.22266 -0.41797,0.22266c-0.09719,0 -0.18716,-0.02505 -0.27539,-0.08398v-0.00195c-2.63374,-1.75543 -6.05959,-2.9151 -10.72266,-2.91406c-1.93887,0.00052 -3.62444,0.23726 -4.83789,0.47656c-0.60672,0.11965 -1.0969,0.23989 -1.43945,0.33203c-0.34255,0.09214 -0.64087,0.18981 -0.55469,0.16211l-0.00781,0.00195l-0.00781,0.00195c-0.26643,0.0904 -0.53594,-0.04337 -0.62695,-0.31641c-0.09101,-0.27304 0.04435,-0.54247 0.31641,-0.63281c0.05869,-0.01956 3.12709,-1.02443 7.1582,-1.02539z"></path>
                </g>
              </g>
            </svg>
          </Link>
          <Link href={`https://soundcloud.com/segunaniyi`}>
            <svg
              className={style.icon}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                stroke="none"
                strokeWidth="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M30,11c-3.60156,0 -7,1.78906 -9,4.6875v3.5l0.3125,0.21875l0.375,-1c1.39844,-3.30078 4.71875,-5.40625 8.21875,-5.40625c5,0 9,4 9,9v2l1.5,-0.59375c0.69922,-0.30078 1.39453,-0.40625 2.09375,-0.40625c3,0 5.5,2.5 5.5,5.5c0,3 -2.5,5.5 -5.5,5.5h-21.5v2h21.5c4.10156,0 7.5,-3.39844 7.5,-7.5c0,-4.10156 -3.39844,-7.5 -7.5,-7.5c-0.5,0 -1,0.08594 -1.5,0.1875c-0.5,-5.69922 -5.19922,-10.1875 -11,-10.1875zM17,16c-0.69922,0 -1.39844,0.08594 -2,0.1875v19.8125h2zM18,16v20h2v-19.5c-0.60156,-0.19922 -1.30078,-0.39844 -2,-0.5zM14,16.5c-0.69922,0.30078 -1.39844,0.60156 -2,1v18.5h2zM11,18.3125c-0.80078,0.69922 -1.5,1.59375 -2,2.59375v15.09375h2zM6.5,22c-0.17578,0.01172 -0.35156,0.04297 -0.5,0.09375v13.8125c0.30078,0.10156 0.69922,0.09375 1,0.09375h1v-13.90625c-0.30078,-0.10156 -0.69922,-0.09375 -1,-0.09375c-0.14844,0 -0.32422,-0.01172 -0.5,0zM5,22.3125c-0.69922,0.19922 -1.39844,0.5 -2,1v11.375c0.60156,0.39844 1.30078,0.80078 2,1zM2,24.09375c-1.19922,1.30078 -2,3.00781 -2,4.90625c0,1.89844 0.80078,3.60547 2,4.90625z"></path>
                </g>
              </g>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
