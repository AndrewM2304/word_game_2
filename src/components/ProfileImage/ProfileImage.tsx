import React from "react";
import styles from "./ProfileImage.module.css";
import redGem from "@public/game-assets/red_gem.svg";
import Image from "next/image";
import { OutlineText } from "@components/OutlineText";

export type ProfileImageProps = {
  url: string;
  text: string;
  color: "red" | "blue" | "green";
  notification: number | string | null;
};
const ProfileImage = ({
  url,
  text,
  color,
  notification,
}: ProfileImageProps) => {
  return (
    <>
      <div data-testid="ProfileImage-wrapper" className={styles.ProfileImage}>
        <div className={styles.notificationWrapper}>
          {notification && <NotificationBadge text={notification.toString()} />}
        </div>
        {url && (
          <Image
            priority
            className={styles.profilePicture}
            src={url}
            alt={"profile picture"}
            height={80}
            width={80}
          />
        )}
        <div className={styles.circleOffset}></div>
        <svg
          className={styles.background}
          width="104"
          height="104"
          viewBox="0 0 104 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="52"
            cy="52"
            r="51"
            fill="#D8B97D"
            stroke="black"
            strokeWidth="2"
          />

          <path d="M2 54H53L98.5 33" stroke="black" strokeWidth="2" />
          <mask
            id="mask0_79_10"
            className={styles.light}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="104"
            height="104"
          >
            <circle
              cx="52"
              cy="52"
              r="51"
              fill="#D8B97D"
              stroke="black"
              strokeWidth="2"
            />
          </mask>
          <g mask="url(#mask0_79_10)">
            <path
              d="M53 53.5H1L-23 67.5L43 109.5L132.5 95L99 33L53 53.5Z"
              fill="#C59947"
              className={styles.light}
            />
          </g>
        </svg>

        <Gem text={text} color={color} />
      </div>
    </>
  );
};
export default ProfileImage;

export type GemProps = {
  text: string;
  color: "red" | "blue" | "green";
};
export const Gem = ({ text, color }: GemProps) => {
  const setColor = () => {
    switch (color) {
      case "blue":
        return "#7DB7D8";
      case "green":
        return "#7DD88B";
      case "red":
        return "#D87D93";
    }
  };
  return (
    <>
      <div className={styles.gemWrapper}>
        <OutlineText
          text={text}
          sizeInRem={0.875}
          upperCase={false}
          alignment={"center"}
        />
        <svg
          width="103"
          height="42"
          viewBox="0 0 103 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.95857 16.3899C4.29298 13.8892 3.96019 12.6389 4.22766 11.6174C4.47259 10.6819 5.0481 9.86685 5.84768 9.32303C6.72084 8.72916 8.01044 8.6244 10.5896 8.41488L39.6356 6.05538C44.4532 5.66402 46.862 5.46835 49.2741 5.38921C51.5089 5.31589 53.7455 5.31755 55.9801 5.39418C58.3922 5.47688 60.8007 5.67613 65.6177 6.07461L93.7833 8.40459C96.3588 8.61764 97.6465 8.72417 98.5183 9.31842C99.3166 9.86261 99.891 10.6773 100.135 11.6121C100.402 12.6329 100.07 13.8815 99.405 16.3788L95.3562 31.5905C94.9467 33.1291 94.7419 33.8984 94.3166 34.4923C93.9248 35.0395 93.4012 35.479 92.7944 35.7701C92.1357 36.0861 91.3426 36.1544 89.7563 36.2911L66.1362 38.3268C61.1272 38.7585 58.6227 38.9743 56.1142 39.0641C53.7902 39.1473 51.464 39.1494 49.1399 39.0704C46.6312 38.9851 44.1263 38.7738 39.1165 38.3511L14.6136 36.2838C13.0242 36.1497 12.2295 36.0827 11.5695 35.7671C10.9614 35.4764 10.4366 35.0367 10.0439 34.4888C9.61763 33.8942 9.4125 33.1235 9.00225 31.5822L4.95857 16.3899Z"
            fill="black"
            fillOpacity="0.5"
          />
          <path
            d="M96.3226 31.8477L100.371 16.636L100.383 16.5916C100.706 15.3806 100.964 14.4099 101.104 13.6157C101.248 12.8032 101.289 12.0713 101.103 11.3592C100.797 10.1908 100.079 9.17237 99.0815 8.49213C98.4734 8.0776 97.7703 7.87043 96.9567 7.7326C96.1616 7.59789 95.1605 7.51508 93.9116 7.41178L93.8658 7.40799L65.7001 5.07801L65.668 5.07535C60.8813 4.67937 58.4506 4.4783 56.0144 4.39476C53.7574 4.31737 51.4985 4.3157 49.2413 4.38975C46.805 4.46968 44.3741 4.66715 39.5868 5.05605L39.5546 5.05866L10.5087 7.41817L10.4628 7.42189C9.21211 7.52348 8.20954 7.60491 7.41328 7.73863C6.59863 7.87544 5.89443 8.08186 5.28529 8.49615C4.28582 9.17593 3.56643 10.1948 3.26027 11.3641C3.07368 12.0767 3.11479 12.8094 3.25846 13.6229C3.39888 14.418 3.65761 15.39 3.98037 16.6026L3.99221 16.6471L8.03589 31.8394C8.05255 31.902 8.06894 31.9637 8.08511 32.0245C8.44687 33.3862 8.69647 34.3256 9.23114 35.0715C9.72203 35.7562 10.378 36.3059 11.1381 36.6693C11.9661 37.0651 12.9347 37.1464 14.3386 37.2642C14.4014 37.2695 14.465 37.2748 14.5295 37.2803L39.0325 39.3476L39.066 39.3504C44.0442 39.7704 46.5722 39.9837 49.1059 40.0698C51.4533 40.1496 53.8027 40.1475 56.15 40.0635C58.6836 39.9728 61.2112 39.7549 66.1887 39.326L66.2221 39.3231L89.8422 37.2874C89.9065 37.2819 89.97 37.2764 90.0326 37.2711C91.4339 37.1509 92.4007 37.0681 93.2269 36.6717C93.9854 36.3079 94.6399 35.7585 95.1297 35.0745C95.6632 34.3295 95.9123 33.3917 96.2734 32.0324C96.2896 31.9717 96.3059 31.9101 96.3226 31.8477Z"
            stroke="black"
            strokeOpacity="0.5"
            strokeWidth="2"
          />
          <path
            d="M94.3226 28.8477L98.3714 13.636L98.3832 13.5916C98.7055 12.3806 98.9639 11.4099 99.1042 10.6157C99.2478 9.80316 99.2889 9.07129 99.1028 8.35924C98.7974 7.19079 98.0794 6.17237 97.0815 5.49213C96.4734 5.0776 95.7703 4.87043 94.9567 4.7326C94.1616 4.59789 93.1605 4.51508 91.9116 4.41178L91.8658 4.40799L63.7001 2.07801L63.668 2.07535C58.8813 1.67937 56.4506 1.4783 54.0144 1.39476C51.7574 1.31737 49.4985 1.3157 47.2413 1.38975C44.805 1.46968 42.3741 1.66715 37.5868 2.05605L37.5546 2.05866L8.50867 4.41817L8.46278 4.42189C7.21211 4.52348 6.20954 4.60491 5.41328 4.73863C4.59863 4.87544 3.89443 5.08186 3.28529 5.49615C2.28582 6.17593 1.56643 7.19476 1.26027 8.36408C1.07368 9.07674 1.11479 9.80941 1.25846 10.6229C1.39888 11.418 1.65761 12.39 1.98037 13.6026L1.99221 13.6471L6.03589 28.8394C6.05255 28.902 6.06894 28.9637 6.08511 29.0245C6.44687 30.3862 6.69647 31.3256 7.23114 32.0715C7.72203 32.7562 8.378 33.3059 9.13813 33.6693C9.96608 34.0651 10.9347 34.1464 12.3386 34.2642C12.4014 34.2695 12.465 34.2748 12.5295 34.2803L37.0325 36.3476L37.066 36.3504C42.0442 36.7704 44.5722 36.9837 47.1059 37.0698C49.4533 37.1496 51.8027 37.1475 54.15 37.0635C56.6836 36.9728 59.2112 36.7549 64.1887 36.326L64.2221 36.3231L87.8422 34.2874C87.9065 34.2819 87.97 34.2764 88.0326 34.2711C89.4339 34.1509 90.4007 34.0681 91.2269 33.6717C91.9854 33.3079 92.6399 32.7585 93.1297 32.0745C93.6632 31.3295 93.9123 30.3917 94.2734 29.0324C94.2896 28.9717 94.3059 28.9101 94.3226 28.8477Z"
            fill={setColor()}
            stroke="black"
            strokeWidth="2"
          />
          <mask
            id="mask0_78_2080"
            className={styles.dark}
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="97"
            height="35"
          >
            <path
              d="M2.95857 13.3899C2.29298 10.8892 1.96019 9.63892 2.22766 8.61737C2.47259 7.68191 3.0481 6.86685 3.84768 6.32303C4.72084 5.72916 6.01044 5.6244 8.58964 5.41488L37.6356 3.05538C42.4532 2.66402 44.862 2.46835 47.2741 2.38921C49.5089 2.31589 51.7455 2.31755 53.9801 2.39418C56.3922 2.47688 58.8007 2.67613 63.6177 3.07461L91.7833 5.40459C94.3588 5.61764 95.6465 5.72417 96.5183 6.31842C97.3166 6.86261 97.891 7.67735 98.1353 8.6121C98.4021 9.63286 98.0697 10.8815 97.405 13.3788L93.3562 28.5905C92.9467 30.1291 92.7419 30.8984 92.3166 31.4923C91.9248 32.0395 91.4012 32.479 90.7944 32.7701C90.1357 33.0861 89.3426 33.1544 87.7563 33.2911L64.1362 35.3268C59.1272 35.7585 56.6227 35.9743 54.1142 36.0641C51.7902 36.1473 49.464 36.1494 47.1399 36.0704C44.6312 35.9851 42.1263 35.7738 37.1165 35.3511L12.6136 33.2838C11.0242 33.1497 10.2295 33.0827 9.56948 32.7671C8.96137 32.4764 8.4366 32.0367 8.04389 31.4888C7.61763 30.8942 7.4125 30.1235 7.00225 28.5822L2.95857 13.3899Z"
              fill="#7DB7D8"
            />
          </mask>
          <g mask="url(#mask0_78_2080)">
            <path
              d="M92.5629 33.5449L99.2568 8L87.5245 27.7934C86.8329 28.9602 85.5971 29.6971 84.2418 29.7507L10.1858 32.6826L8 33.3293L52.3989 36.994L92.5629 33.5449Z"
              fill="black"
              opacity={0.3}
              className={styles.light}
            />
            <path
              d="M7.6341 12.009L8.5 32.5L7 30L4 18.5L1.88059 10.3756C1.41719 8.59922 2.64365 6.82698 4.46938 6.6348L20 5L51 2.5L57.5573 3.29368L9.35898 9.94332C8.33748 10.0843 7.59057 10.9787 7.6341 12.009Z"
              fill="white"
              opacity={0.5}
              className={styles.light}
            />
          </g>
          <path
            d="M94.3226 29.8477L98.3714 14.636L98.3832 14.5916C98.7055 13.3806 98.9639 12.4099 99.1042 11.6157C99.2478 10.8032 99.2889 10.0713 99.1028 9.35924C98.7974 8.19079 98.0794 7.17237 97.0815 6.49213C96.4734 6.0776 95.7703 5.87043 94.9567 5.7326C94.1616 5.59789 93.1605 5.51508 91.9116 5.41178L91.8658 5.40799L63.7001 3.07801L63.668 3.07535C58.8813 2.67937 56.4506 2.4783 54.0144 2.39476C51.7574 2.31737 49.4985 2.3157 47.2413 2.38975C44.805 2.46968 42.3741 2.66715 37.5868 3.05605L37.5546 3.05866L8.50867 5.41817L8.46278 5.42189C7.21211 5.52348 6.20954 5.60491 5.41328 5.73863C4.59863 5.87544 3.89443 6.08186 3.28529 6.49615C2.28582 7.17593 1.56643 8.19476 1.26027 9.36408C1.07368 10.0767 1.11479 10.8094 1.25846 11.6229C1.39888 12.418 1.65761 13.39 1.98037 14.6026L1.99221 14.6471L6.03589 29.8394C6.05255 29.902 6.06894 29.9637 6.08511 30.0245C6.44687 31.3862 6.69647 32.3256 7.23114 33.0715C7.72203 33.7562 8.378 34.3059 9.13813 34.6693C9.96608 35.0651 10.9347 35.1464 12.3386 35.2642C12.4014 35.2695 12.465 35.2748 12.5295 35.2803L37.0325 37.3476L37.066 37.3504C42.0442 37.7704 44.5722 37.9837 47.1059 38.0698C49.4533 38.1496 51.8027 38.1475 54.15 38.0635C56.6836 37.9728 59.2112 37.7549 64.1887 37.326L64.2221 37.3231L87.8422 35.2874C87.9065 35.2819 87.97 35.2764 88.0326 35.2711C89.4339 35.1509 90.4007 35.0681 91.2269 34.6717C91.9854 34.3079 92.6399 33.7585 93.1297 33.0745C93.6632 32.3295 93.9123 31.3917 94.2734 30.0324C94.2896 29.9717 94.3059 29.9101 94.3226 29.8477Z"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>
      <svg version="1.1" xmlns="//www.w3.org/2000/svg" className={styles.hide}>
        <defs>
          <filter id="stroke-text-svg-filter">
            <feMorphology operator="dilate" radius="1.5"></feMorphology>
            <feComposite operator="xor" in="SourceGraphic" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

type NotificationBadge = {
  text: string;
};
export const NotificationBadge = ({ text }: NotificationBadge) => {
  return (
    <div className={styles.notification}>
      <OutlineText
        text={text}
        sizeInRem={0.875}
        upperCase={false}
        alignment={"center"}
      />
    </div>
  );
};
