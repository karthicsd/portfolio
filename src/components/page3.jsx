import "./page3.css"
import '@google/model-viewer';
import Java from "../assets/java3d.glb"
import Sql from "../assets/sql3d.glb"
import Python from "../assets/python3d.glb"
import React from "../assets/react3d.glb"
import Blender from "../assets/blender3d.glb"
import Html from "../assets/html3d.glb"
import C from "../assets/c3d.glb"
import Github from "../assets/github3d.glb"
import Tailwind from "../assets/tailwind.glb"
import Vscode from "../assets/vscode3d.glb"
import Css from "../assets/css3d.glb"
import Figma from "../assets/figma3d.glb"

function  page3(){
    return<>
    <div className="page3-main">
        <h2>Technical Skills</h2>
        <div className="page3-main-inner">
            <model-viewer src={C} auto-rotate rotation-per-second="90deg"/>
            <model-viewer src={Java} auto-rotate rotation-per-second="90deg"/>
            <model-viewer src={Python} auto-rotate rotation-per-second="90deg"/>
            <model-viewer src={Sql} auto-rotate rotation-per-second="90deg"/>
            <model-viewer src={Html} auto-rotate rotation-per-second="90deg"/>
            <model-viewer src={Css} auto-rotate rotation-per-second="90deg"/>
            <model-viewer src={React} auto-rotate rotation-per-second="90deg"/>
            <model-viewer src={Tailwind} auto-rotate rotation-per-second="90deg"/>
            <model-viewer src={Blender} auto-rotate rotation-per-second="90deg"/>
            <model-viewer src={Github} auto-rotate rotation-per-second="90deg"/>
            <model-viewer src={Vscode} auto-rotate rotation-per-second="90deg"/>
            <model-viewer src={Figma} auto-rotate rotation-per-second="90deg"/>

        </div>
    </div>
    </>
}

export default page3;