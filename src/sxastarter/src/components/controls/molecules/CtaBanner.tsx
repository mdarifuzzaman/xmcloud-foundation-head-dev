import React from 'react';
import AButton from '../atoms/AButton';

type CtaBannerProps = {
    ctaCallBack?: () => void,
    componentClassName?: string;
    imgSrc?: string;
    title?: string;
    subTitle?: string;
    ctaTitle?: string;
    ctaButtonClassName?: string;
};
export default function CtaBanner(props: CtaBannerProps) {
  return (
    <div className={props.componentClassName}>
      {/* <!-- Image --> */}
      <div className="flex justify-center">
        <img src={props.imgSrc} alt="" />
      </div>
      {/* <!-- Text --> */}
      <h5 className="pt-6 text-xl font-bold">{props.title}</h5>
      <p className="text-gray-400">{props.subTitle}</p>

      {/* <!-- Dots --> */}
      <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize">
        <AButton
          onClick={props.ctaCallBack}
          className={props.ctaButtonClassName}
          title={props.ctaTitle}
        ></AButton>
      </div>
    </div>
  );
}
