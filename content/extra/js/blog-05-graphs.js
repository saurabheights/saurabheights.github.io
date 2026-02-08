const vectors = [
    { x: 3, y: 3.5, label: "Parrot 1", color: "hsl(142,70%,45%)" },
    { x: 3.5, y: 3.25, label: "Parrot 2", color: "hsl(160,70%,40%)" },
    { x: 4, y: 1, label: "Ostrich", color: "hsl(350,70%,50%)" }
];

const good_and_bad_vectors = [
    { x: 3, y: 3.5, label: "Parrot 1", class: "Parrot", color: "hsl(142,70%,45%)" },
    { x: 3.5, y: 3.25, label: "Parrot 2", class: "Parrot", color: "hsl(160,70%,40%)" },
    { x: 4, y: 1, label: "Ostrich 1", class: "Ostrich", color: "hsl(350,70%,50%)" },
    { x: 4, y: 3, label: "Ostrich 2", class: "Ostrich", color: "hsl(350,70%,50%)" }
];

const colors = {
    image: "#FFD3AC",
    model: "#ACD3FF",
    roi: "#D3FFC4",
    conv: "#FFC4D3",
    pool: "#FFF3AC",
    output: "#C4ACFF"
};

// Example for an embedding space
document.addEventListener("DOMContentLoaded", () => {
    renderEmbeddingSpace();
    renderReIDPipeline();
    renderMarginAndThreshold();
});


function renderEmbeddingSpace() {
    const w = 600;
    const h = 600;
    const scale = 100;  // pixels per unit
    const range = 6;  // Number of grid lines each side of origin

    const cx = 120;
    const cy = h - 120;

    const svg = d3.select("#blog-05-embedding-viz")
        .attr("width", w)
        .attr("height", h)
        .style("background", "#0f1117");

    // ---------- ARROW MARKER ----------
    svg.append("defs")
        .append("marker")
        .attr("id", "arrow")
        .attr("viewBox", "0 -10 20 20")
        .attr("refX", 13)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5")
        .attr("fill", "context-stroke");

    // ---------- GRID ----------
    const grid = d3.range(-range, range + 1);

    svg.selectAll(".vgrid")
        .data(grid)
        .enter()
        .append("line")
        .attr("x1", d => cx + d * scale)
        .attr("x2", d => cx + d * scale)
        .attr("y1", 0)
        .attr("y2", h)
        .attr("stroke", "rgba(255,255,255,0.06)");

    svg.selectAll(".hgrid")
        .data(grid)
        .enter()
        .append("line")
        .attr("y1", d => cy - d * scale)
        .attr("y2", d => cy - d * scale)
        .attr("x1", 0)
        .attr("x2", w)
        .attr("stroke", "rgba(255,255,255,0.06)");

    // ---------- AXES ----------
    svg.append("line")
        .attr("x1", 0).attr("y1", cy)
        .attr("x2", w).attr("y2", cy)
        .attr("stroke", "rgba(255,255,255,0.25)")
        .attr("stroke-width", 1.5);

    svg.append("line")
        .attr("x1", cx).attr("y1", 0)
        .attr("x2", cx).attr("y2", h)
        .attr("stroke", "rgba(255,255,255,0.25)")
        .attr("stroke-width", 1.5);

    // ---------- AXIS NUMBERS ----------
    svg.selectAll(".xlabels")
        .data(grid.filter(d => d !== 0))
        .enter()
        .append("text")
        .attr("x", d => cx + d * scale)
        .attr("y", cy + 18)
        .attr("fill", "rgba(255,255,255,0.35)")
        .attr("font-family", "monospace")
        .attr("font-size", 12)
        .attr("text-anchor", "middle")
        .text(d => d);

    svg.selectAll(".ylabels")
        .data(grid.filter(d => d !== 0))
        .enter()
        .append("text")
        .attr("x", cx - 22)
        .attr("y", d => cy - d * scale + 4)
        .attr("fill", "rgba(255,255,255,0.35)")
        .attr("font-family", "monospace")
        .attr("font-size", 12)
        .text(d => d);

    // ---------- VECTOR GROUP ----------
    const g = svg.append("g");

    // Lines
    g.selectAll(".vector")
        .data(vectors)
        .enter()
        .append("line")
        .attr("x1", cx)
        .attr("y1", cy)
        .attr("x2", d => cx + d.x * scale)
        .attr("y2", d => cy - d.y * scale)
        .attr("stroke", d => d.color)
        .attr("stroke-width", 2.5)
        .attr("color", d => d.color)
        .attr("marker-end", "url(#arrow)");

    // Tips (dots)
    g.selectAll(".dot")
        .data(vectors)
        .enter()
        .append("circle")
        .attr("cx", d => cx + d.x * scale)
        .attr("cy", d => cy - d.y * scale)
        .attr("r", 4)
        .attr("fill", d => d.color);

    // Labels
    g.selectAll(".label")
        .data(vectors)
        .enter()
        .append("text")
        .attr("x", d => cx + d.x * scale + 10)
        .attr("y", d => cy - d.y * scale - 8)
        .attr("fill", d => d.color)
        .attr("font-weight", "bold")
        .attr("font-size", 14)
        .text(d => d.label);

    // ---------- TITLE ----------
    svg.append("text")
        .attr("x", w / 2)
        .attr("y", 36)
        .attr("text-anchor", "middle")
        .attr("fill", "rgba(255,255,255,0.7)")
        .attr("font-size", 18)
        .attr("font-weight", "bold")
        .text("2D Vector Space — Word Similarity");

    svg.append("text")
        .attr("x", w / 2)
        .attr("y", 58)
        .attr("text-anchor", "middle")
        .attr("fill", "rgba(255,255,255,0.35)")
        .attr("font-size", 13);
}


function renderReIDPipeline() {

}


function renderMarginAndThreshold() {
    const w = 700;
    const h = 700;
    const scale = 100;  // pixels per unit
    const range = 6;
    const cx = 120;
    const cy = h - 120;

    const svg = d3.select("#blog-05-embedding-margin-viz")
        .attr("width", w)
        .attr("height", h)
        .style("background", "#0f1117");

    // ---------- ARROW MARKER ----------
    svg.append("defs")
        .append("marker")
        .attr("id", "arrow-end")
        .attr("viewBox", "-10 -10 20 20")
        .attr("refX", 13)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M0,-5L10,0L0,5")
        .attr("fill", "context-stroke");
    
    // Arrow for line END
    svg.append("defs")
        .append("marker")
        .attr("id", "arrow-start")
        .attr("viewBox", "-10 -10 20 20")
        .attr("refX", -10)
        .attr("refY", 0)
        .attr("markerWidth", 6)
        .attr("markerHeight", 6)
        .attr("orient", "auto")
        .append("path")
        .attr("d", "M10,5L0,0L10,-5")
        .attr("fill", "context-stroke");

    // ---------- GRID ----------
    const grid = d3.range(-range, range + 1);

    svg.selectAll(".vgrid")
        .data(grid)
        .enter()
        .append("line")
        .attr("x1", d => cx + d * scale)
        .attr("x2", d => cx + d * scale)
        .attr("y1", 0)
        .attr("y2", h)
        .attr("stroke", "rgba(255,255,255,0.06)");

    svg.selectAll(".hgrid")
        .data(grid)
        .enter()
        .append("line")
        .attr("y1", d => cy - d * scale)
        .attr("y2", d => cy - d * scale)
        .attr("x1", 0)
        .attr("x2", w)
        .attr("stroke", "rgba(255,255,255,0.06)");

    // ---------- AXES ----------
    svg.append("line")
        .attr("x1", 0).attr("y1", cy)
        .attr("x2", w).attr("y2", cy)
        .attr("stroke", "rgba(255,255,255,0.25)")
        .attr("stroke-width", 1.5);

    svg.append("line")
        .attr("x1", cx).attr("y1", 0)
        .attr("x2", cx).attr("y2", h)
        .attr("stroke", "rgba(255,255,255,0.25)")
        .attr("stroke-width", 1.5);

    // ---------- AXIS NUMBERS ----------
    svg.selectAll(".xlabels")
        .data(grid.filter(d => d !== 0))
        .enter()
        .append("text")
        .attr("x", d => cx + d * scale)
        .attr("y", cy + 18)
        .attr("fill", "rgba(255,255,255,0.35)")
        .attr("font-family", "monospace")
        .attr("font-size", 12)
        .attr("text-anchor", "middle")
        .text(d => d);

    svg.selectAll(".ylabels")
        .data(grid.filter(d => d !== 0))
        .enter()
        .append("text")
        .attr("x", cx - 22)
        .attr("y", d => cy - d * scale + 4)
        .attr("fill", "rgba(255,255,255,0.35)")
        .attr("font-family", "monospace")
        .attr("font-size", 12)
        .text(d => d);

    // ---------- VECTOR GROUP ----------
    const g = svg.append("g");

    // Draw lines and tips
    g.selectAll(".vector")
        .data(good_and_bad_vectors)
        .enter()
        .append("line")
        .attr("x1", cx)
        .attr("y1", cy)
        .attr("x2", d => cx + d.x * scale)
        .attr("y2", d => cy - d.y * scale)
        .attr("stroke", d => d.color)
        .attr("stroke-width", 2.5)
        .attr("color", d => d.color)
        .attr("marker-end", "url(#arrow-end)");

    // Tips (dots)
    g.selectAll(".dot")
        .data(good_and_bad_vectors)
        .enter()
        .append("circle")
        .attr("cx", d => cx + d.x * scale)
        .attr("cy", d => cy - d.y * scale)
        .attr("r", 4)
        .attr("fill", d => d.color);

    // Labels
    g.selectAll(".label")
        .data(good_and_bad_vectors)
        .enter()
        .append("text")
        .attr("x", d => cx + d.x * scale + 10)
        .attr("y", d => cy - d.y * scale - 8)
        .attr("fill", d => d.color)
        .attr("font-weight", "bold")
        .attr("font-size", 14)
        .text(d => d.label);

    // ---------- TITLE ----------
    svg.append("text")
        .attr("x", w / 2)
        .attr("y", 36)
        .attr("text-anchor", "middle")
        .attr("fill", "rgba(255,255,255,0.7)")
        .attr("font-size", 18)
        .attr("font-weight", "bold")
        .text("Embedding Distance Validation with Margin Boundary");

    svg.append("text")
        .attr("x", w / 2)
        .attr("y", 58)
        .attr("text-anchor", "middle")
        .attr("fill", "rgba(255,255,255,0.35)")
        .attr("font-size", 13);

    // Draw margin and circle

    const margin = 1; // margin in same units as coordinates

    // Draw the good margin circle
    g.append("circle")
        .attr("cx", cx + good_and_bad_vectors[0].x * scale)
        .attr("cy", cy - good_and_bad_vectors[0].y * scale)
        .attr("r", margin * scale)
        .attr("fill", "rgba(0,255,0,0.15)")
        .attr("stroke", "rgba(0,255,0,0.3)")
        .attr("stroke-width", 2);

    // Draw the radius line
    g.append("line")
        .attr("x1", cx + good_and_bad_vectors[0].x * scale)
        .attr("y1", cy - good_and_bad_vectors[0].y * scale)
        .attr("x2", cx + (good_and_bad_vectors[0].x - margin / Math.sqrt(2)) * scale) // add margin along x
        .attr("y2", cy - (good_and_bad_vectors[0].y + margin / Math.sqrt(2)) * scale)
        .attr("stroke", "rgba(0,255,0,0.8)")
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "6,4") // dashed line for radius
        .attr("marker-end", "url(#arrow-end)")
        .attr("marker-start", "url(#arrow-start)");

    // Add subtext "margin"
    g.append("text")
        .attr("x", cx + (good_and_bad_vectors[0].x - margin / (Math.sqrt(2)*2)) * scale) // midway along the radius line
        .attr("y", cy - (good_and_bad_vectors[0].y + margin / (Math.sqrt(2)*2)) * scale - 10)
        .attr("fill", "rgba(0,255,0,0.8)")
        .attr("font-size", 12)
        .attr("font-family", "monospace")
        .attr("text-anchor", "start")
        .text("margin (θ) = 1");

    // Draw the bad margin circle
    g.append("circle")
        .attr("cx", cx + good_and_bad_vectors[3].x * scale)
        .attr("cy", cy - good_and_bad_vectors[3].y * scale)
        .attr("r", margin * scale)
        .attr("fill", "hsla(350,70%,50%,15%)")
        .attr("stroke", "hsla(350,70%,50%,30%)")
        .attr("stroke-width", 2);

    // ==============================
    // Draw the good and violating neighbors
    g.append("line")
        .attr("x1", cx + good_and_bad_vectors[3].x * scale)
        .attr("y1", cy - good_and_bad_vectors[3].y * scale)
        .attr("x2", cx + good_and_bad_vectors[1].x * scale) // add margin along x
        .attr("y2", cy - good_and_bad_vectors[1].y * scale)
        .attr("stroke", "hsl(350,70%,50%)")
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "6,4"); // dashed line for radius

    g.append("text")
        .attr("x", cx + (good_and_bad_vectors[3].x + good_and_bad_vectors[1].x) / 2 * scale + 10) // midway along the radius line
        .attr("y", cy - (good_and_bad_vectors[3].y + good_and_bad_vectors[1].y) / 2 * scale - 10)
        .attr("fill", "hsl(350,70%,50%)")
        .attr("font-size", 12)
        .attr("font-family", "monospace")
        .attr("text-anchor", "start")
        .text("Too Close");

    g.append("line")
        .attr("x1", cx + good_and_bad_vectors[3].x * scale)
        .attr("y1", cy - good_and_bad_vectors[3].y * scale)
        .attr("x2", cx + good_and_bad_vectors[2].x * scale) // add margin along x
        .attr("y2", cy - good_and_bad_vectors[2].y * scale)
        .attr("stroke", "hsl(350,70%,50%)")
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "6,4"); // dashed line for radius

    g.append("text")
        .attr("x", cx + (good_and_bad_vectors[3].x + good_and_bad_vectors[2].x) / 2 * scale + 2) // midway along the radius line
        .attr("y", cy - (good_and_bad_vectors[3].y + good_and_bad_vectors[2].y) / 2 * scale)
        .attr("fill", "hsl(350,70%,50%)")
        .attr("font-size", 12)
        .attr("font-family", "monospace")
        .attr("text-anchor", "start")
        .text("Too Far");

    g.append("line")
        .attr("x1", cx + good_and_bad_vectors[0].x * scale)
        .attr("y1", cy - good_and_bad_vectors[0].y * scale)
        .attr("x2", cx + good_and_bad_vectors[1].x * scale) // add margin along x
        .attr("y2", cy - good_and_bad_vectors[1].y * scale)
        .attr("stroke", "rgba(0,255,0,0.8)")
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "6,4"); // dashed line for radius

    g.append("text")
        .attr("x", cx + (good_and_bad_vectors[0].x + good_and_bad_vectors[1].x) / 2 * scale+10) // midway along the radius line
        .attr("y", cy - (good_and_bad_vectors[0].y + good_and_bad_vectors[1].y) / 2 * scale-10)
        .attr("fill", "rgba(0,255,0,0.8)")
        .attr("font-size", 12)
        .attr("font-family", "monospace")
        .attr("text-anchor", "start")
        .text("Good Distance");

    g.append("line")
        .attr("x1", cx + good_and_bad_vectors[0].x * scale)
        .attr("y1", cy - good_and_bad_vectors[0].y * scale)
        .attr("x2", cx + good_and_bad_vectors[2].x * scale) // add margin along x
        .attr("y2", cy - good_and_bad_vectors[2].y * scale)
        .attr("stroke", "rgba(0,255,0,0.8)")
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", "6,4"); // dashed line for radius

    g.append("text")
        .attr("x", cx + (good_and_bad_vectors[0].x + good_and_bad_vectors[2].x) / 2 * scale - 5) // midway along the radius line
        .attr("y", cy - (good_and_bad_vectors[0].y + good_and_bad_vectors[2].y) / 2 * scale + 5)
        .attr("fill", "rgba(0,255,0,0.8)")
        .attr("font-size", 12)
        .attr("font-family", "monospace")
        .attr("text-anchor", "end")
        .text("Good Distance");
}

