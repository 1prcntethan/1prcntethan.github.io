import Navbar from "../components/navbar";
import "./incomplete.css";
import { Link } from "react-router-dom";


export function Incomplete() {
    return (
        <>
          <Navbar />
          <div className="incomplete-text">
            <div>these feathers have not been generated yet. follow <Link to = "https://www.instagram.com/wings.sw/" className="incomplete-link">@wings.sw</Link> on instagram to recieve regular updates on the website.</div>
          </div>
        </>
    )
}