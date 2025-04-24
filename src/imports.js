// imports of APP
import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import ProfessionalJourney from "./sections/ProfessionalJourney"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Experience from "./sections/Experience"
import LogoSection from "./components/LogoSection"
import FeatureCards from "./components/FeatureCards"

// About section mports
import { useState, useRef, Suspense, useEffect } from "react"
import Globe from "react-globe.gl"
import * as THREE from "three"

// Contact Section Imports
import emailjs from "@emailjs/browser"
import useAlert from "./hooks/useAlert"
import Alert from "./components/Alert"
import TitleHeader from "./components/TitleHeader"
import ContactExperience from "./components/ContactExperience"
import Button from "./components/Button"

// Experience Section Imports
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Developer from "./components/Developer.jsx"
import CanvasLoader from "./components/CanvasLoader.jsx"
import { workExperiences } from "./constants/index.js"

// Hero Section Imports
import { PerspectiveCamera } from "@react-three/drei"
import HackerRoom from "./components/HackerRoom"
import { useMediaQuery } from "react-responsive"
import HeroCamera from "./components/HeroCamera"
import Cuby from "./components/Cuby"
import Stars from "./components/Stars"
import Robo from "./components/Robo"

// Navbar Imports
import { navLinks } from "./constants"

// My Prefessional Journey Imports
import { MyProfessionalJourney } from './constants/index.js';

// Projects Section Imports
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Center,  } from "@react-three/drei"
import { myProjects } from "./constants/index.js"
import DemoComputer from "./components/DemoComputer.jsx"

// Canvas Loader and Computer component imports
import { Html, useProgress, useGLTF, useAnimations, useVideoTexture, useFBX, useTexture } from "@react-three/drei"

// Contact Experience imorts
import Computer from "./components/Computer"

// Feature Cards Imports
import { abilities } from "./constants/index.js";


export { Navbar, Hero, About, Projects, ProfessionalJourney, Contact, Footer, Experience, LogoSection, FeatureCards,
        useState, Globe, THREE, emailjs, useRef, useAlert, Alert, TitleHeader, ContactExperience, Button,
        Canvas, OrbitControls, Developer, CanvasLoader, workExperiences, Suspense, PerspectiveCamera, useMediaQuery,
        HackerRoom, HeroCamera, Cuby, Stars, Robo, navLinks, MyProfessionalJourney, gsap, useGSAP, myProjects, Center, 
        DemoComputer, Html, useProgress, useGLTF, Computer, useEffect, useAnimations, useVideoTexture, useFBX, abilities,
        useTexture
}