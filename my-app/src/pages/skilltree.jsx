import Navbar from "../components/navbar";
import "./skilltree.css";
import { useState, useCallback } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
   Controls, 
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { svgIcon } from "../utilites/svg-icons";
import { skillLinks } from "../utilites/skillLinks";
import { Link } from "react-router-dom";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { svg: "push-up", link: "Push-up" }, type: 'skillNode'},
  { id: "2", position: { x: 0, y: 100 }, data: { svg: "pull-up", link: "Pull-up" }, type: 'skillNode' },
];


const initialEdges = [{ id: "1-2", source: "1", target: "2" }];

const SkillNode = ({ data }) => {
  return (
    <>
    <Link to={skillLinks.get(data.link)} className="skill-node">
      {svgIcon.get(data.svg)}
    </Link>
    </>
  )
}

const nodeTypes = { 
  skillNode: SkillNode,
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
        <ReactFlow nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          nodesDraggable={false}
        >
         <Controls />
        </ReactFlow>
      </div>
    </>
  );
}
 
