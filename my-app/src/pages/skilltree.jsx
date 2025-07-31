import Navbar from "../components/navbar";
import "./skilltree.css";
import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
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


const incompleteSkills = [
    "90 Degree Hold",
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
    position: { x: -433 , y: -750 },
    data: { svg: "elbow-lever", link: "Elbow Lever" },
    type: "skillNode",
  },
  {
    id: "4",
    position: { x: 0 , y: -1000 },
    data: { svg: "dip", link: "Dip" },
    type: "skillNode",
  },
  { 
    id: "5",
    position: { x: 0 , y: -1500 },
    data: { svg: "pike-pu", link: "Pike Push-up" },
    type: "skillNode",
  },
  { 
    id: "6",
    position: { x: -433 , y: -1250 },
    data: { svg: "planche-lean", link: "Planche Lean" },
    type: "skillNode",
  },
  { 
    id: "7",
    position: { x: -866 , y: -1500 },
    data: { svg: "pseudo-pu", link: "Pseudo Push-up" },
    type: "skillNode",
  },
  { 
    id: "8",
    position: { x: -866 , y: -1000 },
    data: { svg: "tuck-pl", link: "Tuck Planche" },
    type: "skillNode",
  },
  { 
    id: "9", 
    position: { x: -433 , y: -1750 },
    data: { svg: "crow-pose", link: "Crow Pose" },
    type: "skillNode",
  },
  { 
    id: "10", 
    position: { x: -866 , y: -2000 },
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
  
];

const SkillNode = ({ data }) => {
  return (
    <>
      <Link to={incompleteSkills.includes(data.link)
        ? "/tutorials/incomplete"
        : skillLinks.get(data.link)} className="skill-node">
        <Handle
          type="target"
          position={Position.Top}
          style={{ background: "transparent", border: "transparent", top: "50%", right: "50%"}}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          style={{ background: "transparent", border: "transparent", bottom: "50%", left: "50%"}}
        />
        {svgIcon.get(data.svg)}
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
  return (
    <BaseEdge
      id={id}
      path={path}
      style={{ stroke: "#ffffff", strokeWidth: 100, ...style }}
      markerEnd={markerEnd}
    />
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
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  );

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          nodesDraggable={false}
          edgeTypes={edgeTypes}
          minZoom={0.2}
          maxZoom={2}
          defaultViewport={{ x: 1000, y: 1000, zoom: 0.5 }}
        >
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
}
