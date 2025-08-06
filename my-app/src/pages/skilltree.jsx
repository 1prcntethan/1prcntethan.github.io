import "./skilltree.css";
import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  Controls,
  BaseEdge,
  getStraightPath,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { svgIcon } from "../utilites/svg-icons";
import { skillLinks } from "../utilites/skillLinks";
import { Link } from "react-router-dom";
import SkillTreeLinkContainer from "../components/skilltreelinkcontainer";
import { skillTreeIcon } from "../utilites/skilltreeicons";



const incompleteSkills = [
  "Back Lever",
  "Straddle Planche",
  "Straddle Planche PU",
  "Half Lay Planche",
  "Full Planche",
  "Full Planche PU",
  "One Arm Planche",
  "Maltese",
  "Full FL Row",
  "Front Lever Touch",
  "Bent Arm Press to HS",
  "Straight Arm Press to HS",
  "Deep HSPU",
  "90 Degree PU",
  "Assisted OAHS",
  "OAHS",
  "OA Flag",
  "Archer Pull-up",
  "Clean Muscle-Up",
  "Assisted OAC",
  "Assisted OAP",
  "OAC/OAP",
  "Weighted Pull-ups",
  "Butterfly",
  "Bodyweight Squat",
  "Split Squat",
  "Assisted Pistol Squat",
  "Bulgarian Split Squat",
  "Reverse Nordic Curl",
  "Nordic Curl",
  "Sissy Squat",
  "Pistol Squat",
  "Shrimp Squat",
  "Dragon Pistol Squat",
  "V-sit",
  "I-sit",
  "Manna",
  "Human Flag",
  "Victorian",
];

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { svg: "assisted-pushup", link: "Assisted Push-up" },
    type: "skillNode",
  },
  {
    id: "2",
    position: { x: 0, y: -500 },
    data: { svg: "push-up", link: "Push-up" },
    type: "skillNode",
  },
  {
    id: "3",
    position: { x: -433, y: -750 },
    data: { svg: "elbow-lever", link: "Elbow Lever" },
    type: "skillNode",
  },
  {
    id: "4",
    position: { x: 0, y: -1000 },
    data: { svg: "dip", link: "Dip" },
    type: "skillNode",
  },
  {
    id: "5",
    position: { x: 0, y: -1500 },
    data: { svg: "pike-pu", link: "Pike Push-up" },
    type: "skillNode",
  },
  {
    id: "6",
    position: { x: -433, y: -1250 },
    data: { svg: "planche-lean", link: "Planche Lean" },
    type: "skillNode",
  },
  {
    id: "7",
    position: { x: -866, y: -1500 },
    data: { svg: "pseudo-pu", link: "Pseudo Push-up" },
    type: "skillNode",
  },
  {
    id: "8",
    position: { x: -866, y: -1000 },
    data: { svg: "tuck-pl", link: "Tuck Planche" },
    type: "skillNode",
  },
  {
    id: "9",
    position: { x: -433, y: -1750 },
    data: { svg: "crow-pose", link: "Crow Pose" },
    type: "skillNode",
  },
  {
    id: "10",
    position: { x: -866, y: -2000 },
    data: { svg: "assisted-hs", link: "Assisted Handstand" },
    type: "skillNode",
  },
  {
    id: "11",
    position: { x: -1300, y: -750 },
    data: { svg: "tuck-pl-pu", link: "Tuck Planche PU" },
    type: "skillNode",
  },
  {
    id: "12",
    position: { x: -1300, y: -1250 },
    data: { svg: "adv-tuck-pl", link: "Adv. Tuck Planche" },
    type: "skillNode",
  },
  {
    id: "13",
    position: { x: -1300, y: -1750 },
    data: { svg: "adv-tuck-pl-pu", link: "Adv. Tuck Planche PU" },
    type: "skillNode",
  },
  {
    id: "14",
    position: { x: -1733, y: -1500 },
    data: { svg: "super-adv-tuck-pl", link: "Super Adv. Tuck PL" },
    type: "skillNode",
  },
  {
    id: "15",
    position: { x: -2166, y: -1250 },
    data: { svg: "straddle-pl", link: "Straddle Planche" },
    type: "skillNode",
  },
  {
    id: "16",
    position: { x: -1733, y: -1000 },
    data: { svg: "straddle-pl-pu", link: "Straddle Planche PU" },
    type: "skillNode",
  },
  {
    id: "17",
    position: { x: -2600, y: -1500 },
    data: { svg: "half-lay-pl", link: "Half Lay Planche" },
    type: "skillNode",
  },
  {
    id: "18",
    position: { x: 0, y: -2000 },
    data: { svg: "elevated-pike-pu", link: "Elevated Pike PU" },
    type: "skillNode",
  },
  {
    id: "19",
    position: { x: -433, y: -2250 },
    data: { svg: "handstand", link: "Handstand" },
    type: "skillNode",
  },
  {
    id: "20",
    position: { x: 0, y: -2500 },
    data: { svg: "bas", link: "Bent Arm Stand" },
    type: "skillNode",
  },
  {
    id: "21",
    position: { x: -433, y: -2750 },
    data: { svg: "assisted-hspu", link: "Assisted HSPU" },
    type: "skillNode",
  },
  {
    id: "22",
    position: { x: -866, y: -2500 },
    data: { svg: "hspu", link: "HSPU" },
    type: "skillNode",
  },
  {
    id: "23",
    position: { x: 433, y: -1750 },
    data: { svg: "bent-arm-press", link: "Bent Arm Press to HS" },
    type: "skillNode",
  },
  {
    id: "24",
    position: { x: 433, y: -2250 },
    data: { svg: "straight-arm-press", link: "Straight Arm Press to HS" },
    type: "skillNode",
  },
  {
    id: "25",
    position: { x: -2600, y: -2000 },
    data: { svg: "full-pl", link: "Full Planche" },
    type: "skillNode",
  },
  {
    id: "26",
    position: { x: -3033, y: -1750 },
    data: { svg: "oapl", link: "One Arm Planche" },
    type: "skillNode",
  },
  {
    id: "27",
    position: { x: -3033, y: -2250 },
    data: { svg: "maltese", link: "Maltese" },
    type: "skillNode",
  },
  {
    id: "28",
    position: { x: -2600, y: -2500 },
    data: { svg: "full-pl-pu", link: "Full Planche PU" },
    type: "skillNode",
  },
  {
    id: "29",
    position: { x: -1733, y: -2000 },
    data: { svg: "ninety-deg-hold", link: "90 Degree Hold" },
    type: "skillNode",
  },
  {
    id: "30",
    position: { x: -2166, y: -1750 },
    data: { svg: "back-lever", link: "Back Lever" },
    type: "skillNode",
  },
  {
    id: "31",
    position: { x: -1300, y: -2250 },
    data: { svg: "ninety-deg-pu", link: "90 Degree PU" },
    type: "skillNode",
  },
  {
    id: "32",
    position: { x: -866, y: -3000 },
    data: { svg: "deep-hspu", link: "Deep HSPU" },
    type: "skillNode",
  },
  {
    id: "33",
    position: { x: -1300, y: -2750 },
    data: { svg: "oahs", link: "OAHS" },
    type: "skillNode",
  },
  {
    id: "34",
    position: { x: 433, y: -250 },
    data: { svg: "situp", link: "Sit-up" },
    type: "skillNode",
  },
  {
    id: "35",
    position: { x: 866, y: -500 },
    data: { svg: "hollowbody", link: "Hollow Body Hold" },
    type: "skillNode",
  },
  {
    id: "36",
    position: { x: 866, y: -1000 },
    data: { svg: "dragon-flag", link: "Dragon Flag" },
    type: "skillNode",
  },
  {
    id: "37",
    position: { x: 433, y: 250 },
    data: { svg: "l-sit-comp", link: "L-Sit Compression" },
    type: "skillNode",
  },
  {
    id: "38",
    position: { x: 433, y: 750 },
    data: { svg: "l-sit", link: "L-Sit" },
    type: "skillNode",
  },
  {
    id: "39",
    position: { x: 1300, y: 250 },
    data: { svg: "assisted-inv-row", link: "Assisted Inverted Row" },
    type: "skillNode",
  },
  {
    id: "40",
    position: { x: 1300, y: -250 },
    data: { svg: "inverted-row", link: "Inverted Row" },
    type: "skillNode",
  },
  {
    id: "41",
    position: { x: 1300, y: -750 },
    data: { svg: "pull-up", link: "Pull-up" },
    type: "skillNode",
  },
  {
    id: "42",
    position: { x: 1733, y: -500 },
    data: { svg: "assist-pullup", link: "Assisted Pull-up" },
    type: "skillNode",
  },
  {
    id: "43",
    position: { x: 1733, y: 0 },
    data: { svg: "activehang", link: "Active Hang" },
    type: "skillNode",
  },
  {
    id: "44",
    position: { x: 1733, y: 500 },
    data: { svg: "deadhang", link: "Dead Hang" },
    type: "skillNode",
  },
  {
    id: "45",
    position: { x: 1300, y: -1250 },
    data: { svg: "tuck-fl", link: "Tuck FL" },
    type: "skillNode",
  },
  {
    id: "46",
    position: { x: 1733, y: -1500 },
    data: { svg: "tuck-fl-row", link: "Tuck FL Row" },
    type: "skillNode",
  },
  {
    id: "47",
    position: { x: 1300, y: -1750 },
    data: { svg: "pike-fl", link: "Pike FL" },
    type: "skillNode",
  },
  {
    id: "48",
    position: { x: 1733, y: -2000 },
    data: { svg: "pike-fl-row", link: "Pike FL Row" },
    type: "skillNode",
  },
  {
    id: "49",
    position: { x: 1300, y: -2250 },
    data: { svg: "adv-tuck-fl", link: "Adv. Tuck FL" },
    type: "skillNode",
  },
  {
    id: "50",
    position: { x: 1733, y: -2500 },
    data: { svg: "adv-tuck-fl-row", link: "Adv. Tuck FL Row" },
    type: "skillNode",
  },
  {
    id: "51",
    position: { x: 1300, y: -2750 },
    data: { svg: "super-adv-tuck-fl", link: "Super Adv. Tuck FL" },
    type: "skillNode",
  },
  {
    id: "52",
    position: { x: 1733, y: -3000 },
    data: { svg: "straddle-fl", link: "Straddle FL" },
    type: "skillNode",
  },
  {
    id: "53",
    position: { x: 2166, y: -2750 },
    data: { svg: "half-lay-fl", link: "Half Lay FL" },
    type: "skillNode",
  },
  {
    id: "54",
    position: { x: 1300, y: -3250 },
    data: { svg: "straddle-fl-row", link: "Straddle FL Row" },
    type: "skillNode",
  },
  {
    id: "55",
    position: { x: 2166, y: -3250 },
    data: { svg: "full-fl", link: "Full Front Lever" },
    type: "skillNode",
  },
  {
    id: "56",
    position: { x: 1733, y: -3500 },
    data: { svg: "full-fl-row", link: "Full FL Row" },
    type: "skillNode",
  },
  {
    id: "57",
    position: { x: 2166, y: -3750 },
    data: { svg: "fl-touch", link: "Front Lever Touch" },
    type: "skillNode",
  },
  {
    id: "58",
    position: { x: 1733, y: -1000 },
    data: { svg: "scapula-pull-up", link: "Scapula Pull-up" },
    type: "skillNode",
  },
  {
    id: "59",
    position: { x: 2166, y: -1250 },
    data: { svg: "chest-pull-up", link: "Chest Pull-up" },
    type: "skillNode",
  },
  {
    id: "60",
    position: { x: 2600, y: -1000 },
    data: { svg: "weighted-pull-up", link: "Weighted Pull-ups" },
    type: "skillNode",
  },
  {
    id: "61",
    position: { x: 2600, y: -1500 },
    data: { svg: "waist-pull-up", link: "Waist Pull-up" },
    type: "skillNode",
  },
  {
    id: "62",
    position: { x: 2600, y: -2000 },
    data: { svg: "muscle-up", link: "Muscle-Up" },
    type: "skillNode",
  },
  {
    id: "63",
    position: { x: 3033, y: -2250 },
    data: { svg: "clean-muscle-up", link: "Clean Muscle-Up" },
    type: "skillNode",
  },
  {
    id: "64",
    position: { x: 3033, y: -1250 },
    data: { svg: "archer-pullup", link: "Archer Pull-up" },
    type: "skillNode",
  },
  {
    id: "65",
    position: { x: 3033, y: -1750 },
    data: { svg: "assisted-oap-oac", link: "Assisted OAC" },
    type: "skillNode",
  },
  {
    id: "66",
    position: { x: 3466, y: -1500 },
    data: { svg: "assisted-oap-oac", link: "Assisted OAP" },
    type: "skillNode",
  },
  {
    id: "67",
    position: { x: 3466, y: -2000 },
    data: { svg: "oac-oap", link: "OAC/OAP" },
    type: "skillNode",
  },
  {
    id: "68",
    position: { x: 866, y: 0 },
    data: { svg: "bw-squat", link: "Bodyweight Squat" },
    type: "skillNode",
  },
  {
    id: "69",
    position: { x: 866, y: 500 },
    data: { svg: "split-squat", link: "Split Squat" },
    type: "skillNode",
  },
];

const initialEdges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "2-3",
    source: "2",
    target: "3",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "2-4",
    source: "2",
    target: "4",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "4-5",
    source: "4",
    target: "5",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "4-6",
    source: "4",
    target: "6",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "6-7",
    source: "6",
    target: "7",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "7-8",
    source: "7",
    target: "8",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "5-9",
    source: "5",
    target: "9",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "9-10",
    source: "9",
    target: "10",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "8-11",
    source: "8",
    target: "11",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "8-12",
    source: "8",
    target: "12",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "12-13",
    source: "12",
    target: "13",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "12-14",
    source: "12",
    target: "14",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "14-15",
    source: "14",
    target: "15",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "15-16",
    source: "15",
    target: "16",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "15-17",
    source: "15",
    target: "17",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "5-18",
    source: "5",
    target: "18",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "10-19",
    source: "10",
    target: "19",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "18-20",
    source: "18",
    target: "20",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "19-20",
    source: "19",
    target: "20",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "20-21",
    source: "20",
    target: "21",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "21-22",
    source: "21",
    target: "22",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "24-20",
    source: "24",
    target: "20",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "23-24",
    source: "23",
    target: "24",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "18-23",
    source: "18",
    target: "23",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "17-25",
    source: "17",
    target: "25",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "25-26",
    source: "25",
    target: "26",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "25-27",
    source: "25",
    target: "27",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "25-28",
    source: "25",
    target: "28",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "14-29",
    source: "14",
    target: "29",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "29-30",
    source: "29",
    target: "30",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "29-31",
    source: "29",
    target: "31",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "22-31",
    source: "22",
    target: "31",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "22-32",
    source: "22",
    target: "32",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "22-33",
    source: "22",
    target: "33",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "34-35",
    source: "34",
    target: "35",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "35-36",
    source: "35",
    target: "36",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "34-37",
    source: "34",
    target: "37",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "37-38",
    source: "37",
    target: "38",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "39-40",
    source: "39",
    target: "40",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "40-41",
    source: "40",
    target: "41",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "42-41",
    source: "42",
    target: "41",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "43-42",
    source: "43",
    target: "42",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "44-43",
    source: "44",
    target: "43",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "41-45",
    source: "41",
    target: "45",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "45-46",
    source: "45",
    target: "46",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "45-47",
    source: "45",
    target: "47",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "47-48",
    source: "47",
    target: "48",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "47-49",
    source: "47",
    target: "49",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "49-50",
    source: "49",
    target: "50",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "49-51",
    source: "49",
    target: "51",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "50-51",
    source: "50",
    target: "51",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "51-52",
    source: "51",
    target: "52",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "52-53",
    source: "52",
    target: "53",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "52-54",
    source: "52",
    target: "54",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "53-55",
    source: "53",
    target: "55",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "54-56",
    source: "54",
    target: "56",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "55-56",
    source: "55",
    target: "56",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "56-57",
    source: "56",
    target: "57",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "41-58",
    source: "41",
    target: "58",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "58-59",
    source: "58",
    target: "59",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "59-60",
    source: "59",
    target: "60",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "59-61",
    source: "59",
    target: "61",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "61-62",
    source: "61",
    target: "62",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "62-63",
    source: "62",
    target: "63",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "61-64",
    source: "61",
    target: "64",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "64-65",
    source: "64",
    target: "65",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "65-66",
    source: "65",
    target: "66",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "65-67",
    source: "65",
    target: "67",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "66-67",
    source: "66",
    target: "67",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  {
    id: "68-69",
    source: "68",
    target: "69",
    type: "skillEdge",
    style: { stroke: "#ffffff", strokeWidth: 2, zIndex: 1 },
  },
  

];

const SkillNode = ({ data }) => {
  return (
    <>
      <Link
        to={
          incompleteSkills.includes(data.link)
            ? "/tutorials/incomplete"
            : skillLinks.get(data.link)
        }
        className="skill-node"
        minWidth="10vw"
        minHeight="10vh"
      >
        <Handle
          type="target"
          position={Position.Top}
          style={{
            background: "transparent",
            border: "transparent",
            top: "50%",
            right: "50%",
            zIndex: -1,
          }}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          style={{
            background: "transparent",
            border: "transparent",
            bottom: "50%",
            left: "50%",
            zIndex: -1,
          }} 
        />
        {skillTreeIcon.get(data.svg)}
      </Link>
    </>
  );
};

const SkillEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) => {
  const [path] = getStraightPath({ sourceX, sourceY, targetX, targetY });
  
  const centerX = (sourceX + targetX) / 2;
  const centerY = (sourceY + targetY) / 2;

  const dx = targetX - sourceX;
  const dy = targetY - sourceY;
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  return (
    <>
      <BaseEdge
        id={id}
        path={path}
        style={{ stroke: "#ffffff", strokeWidth: 100, ...style }}
        markerEnd={markerEnd}
      />
      <svg
        style={{
          position: "absolute",
          overflow: "visible",
          left: 0,
          top: 0,
          pointerEvents: "none",
        }}
      >
        <g transform={`translate(${centerX}, ${centerY}) rotate(${angle})`}>
          <polygon
            points="0,-10 20,0 0,10 "
            fill="#ffffff"
          />
        </g>
      </svg>
    </>
  );
};


const nodeTypes = {
  skillNode: SkillNode,
};

const edgeTypes = {
  skillEdge: SkillEdge,
};

export function SkillTree() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <SkillTreeLinkContainer />
        <ReactFlow
          nodes={nodes}
          edges={edges}
          // onNodesChange={onNodesChange}
          // onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          nodesDraggable={false}
          edgeTypes={edgeTypes}
          minZoom={0.15}
          maxZoom={2}
          defaultViewport={{ x: 1000, y: 1000, zoom: 0.5 }}
        >
          <Controls
            showZoom={true}
            showFitView={true}
            showInteractive={false}
            style={{
              boxShadow: "none",
              color: "#ffffff",
            }}
          ></Controls>
        </ReactFlow>
      </div>
    </>
  );
}
