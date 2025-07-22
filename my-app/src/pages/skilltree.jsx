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

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { svg: "assisted-pushup", link: "Assisted Push-up" },
    type: "skillNode",
  },
  {
    id: "2",
    position: { x: 0, y: 300 },
    data: { svg: "push-up", link: "Push-up" },
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
];

const SkillNode = ({ data }) => {
  return (
    <>
      <Link to={skillLinks.get(data.link)} className="skill-node">
        <Handle
          type="target"
          position={Position.Top}
          style={{ background: "white", border: "white", top: "50%", right: "50%"}}
        />
        <Handle
          type="source"
          position={Position.Bottom}
          style={{ background: "white", border: "white", bottom: "50%", left: "50%"}}
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
          // nodesDraggable={false}
          edgeTypes={edgeTypes}
          minZoom={0.2}
          maxZoom={2}
          defaultViewport={{ x: 0, y: 0, zoom: 0.5 }}
        >
          <Controls />
        </ReactFlow>
      </div>
    </>
  );
}
