import React from 'react';
import group_3 from "../../assets/group-3.svg";
import ellipse_3 from "../../assets/ellipse-3.svg";
import vscode from "../../assets/devicon-vscode.svg";
import kubernet from "../../assets/logos-kubernetes.svg";
import aws_ec2 from "../../assets/logos-aws-ec-2.svg";
import docker from "../../assets/logos-docker-icon.svg";
import jenkins from "../../assets/logos-jenkins.svg";
import aws from "../../assets/logos-aws.svg";
import Ellipse from '../KeyFeatures/Ellipse';
import Ellipse3 from './Ellipse3';

const Enrollment: React.FC = () => {
  return (
    <div className="max-w-[1440px] min-h-screen bg-black flex flex-col items-center justify-center p-8 relative ml-28">
      <h1 className="text-white text-6xl font-bold mb-16">Book Your Enrollment</h1>

      {/* Ellipse Positioned in the Background */}
      <div className="absolute top-[47%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Ellipse3 />
      </div>

      {/* Timer Section */}
      <div className="relative w-[385px] h-[350px] flex items-center justify-center">
        {/* Timer Background SVG */}
        <img
          src={group_3}
          alt="Timer Background"
          className="absolute  inset-0  z-1 left-[-3%] top-[-10%]"
        />
        {/* Timer Ellipse SVG */}
        <img
          src={ellipse_3}
          alt="Timer Ellipse"
          className="absolute inset-0 w-[100%] h-[135%] left-[0%] top-[-20%] object-cover"
        />
        {/* Timer Text */}
        <div className="absolute flex flex-col items-center justify-center text-white">
          <p className="text-2xl mb-2">20 Days Left</p>
          <p className="text-5xl font-bold">09 : 41 : 03</p>
        </div>
      </div>

      <button className="mt-12 px-10 py-3 z-30 bg-[#4377FE] text-white rounded-full text-xl font-semibold shadow-[0_8px_60px_rgba(0,165,255,0.5)] transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r from-[#feb56c] to-[#d325ff] hover:scale-105">
        Enroll now
      </button>

      {/* Icons Section */}
      <div className="mt-16 w-full max-w-4xl relative">
        <div className="absolute top-[-35rem] left-10">
          <div className="w-15 h-15 rounded-full bg-white bg-opacity-10 p-2 flex items-center justify-center">
            <img src={kubernet} alt="Kubernetes" className="w-10 h-10" />
          </div>
        </div>
        <div className="absolute top-[-35rem] right-10">
          <div className="w-15 h-15 rounded-full bg-white bg-opacity-10 p-2 flex items-center justify-center">
            <img src={vscode} alt="VS Code" className="w-10 h-10" />
          </div>
        </div>
        <div className="absolute top-[-23rem] left-0">
          <div className="w-15 h-15 rounded-full bg-white bg-opacity-10 p-2 flex items-center justify-center">
            <img src={aws} alt="AWS" className="w-10 h-10" />
          </div>
        </div>
        <div className="absolute top-[-7rem] left-[15%]">
          <div className="w-15 h-15 rounded-full bg-white bg-opacity-10 p-2 flex items-center justify-center">
            <img src={docker} alt="Docker" className="w-10 h-10" />
          </div>
        </div>
        <div className="absolute top-[-23rem] right-[0rem] ">
          <div className="w-15 h-15 rounded-full bg-white bg-opacity-10 p-2 flex items-center justify-center">
            <img src={jenkins} alt="Jenkins" className="w-10 h-10" />
          </div>
        </div>
        <div className="absolute top-[-7rem] right-[15%]">
          <div className="w-15 h-15 rounded-full bg-white bg-opacity-10 p-2 flex items-center justify-center">
            <img src={aws_ec2} alt="AWS EC2" className="w-10 h-10" />
          </div>
        </div>
      </div>

      {/* Ellipse Positioned in the Background */}
      <div className="absolute top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-1">
        <Ellipse />
      </div>
    </div>
  );
};

export default Enrollment;
