// Report.jsx
import { useLocation } from "react-router-dom";
import './Report.css'; // Import your CSS file

const Report = () => {
    const location = useLocation();
    const evaluation = location.state?.evaluation || "No evaluation data received";

    // Function to convert markdown-like syntax to HTML
    const convertMarkdownToHTML = (markdown) => {
        return markdown
            .replace(/## (.*?)\n/g, '<h2>$1</h2>') // Convert ## to <h2>
            .replace(/### (.*?)\n/g, '<h3>$1</h3>') // Convert ### to <h3>
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Convert **bold** to <strong>
            .replace(/\*(.*?)\*/g, '<em>$1</em>') // Convert *italic* to <em>
            .replace(/\n/g, '<br/>') // Convert new lines to <br/>
            .replace(/^\* (.*?)(?=\n)/gm, '<li>$1</li>') // Convert * item to <li>
            .replace(/^(?=\d+\.)\s*(\d+\.\s.*?)(?=\n)/gm, '<li>$1</li>') // Convert numbered items
            .replace(/(<li>.*?<\/li>)/g, '<ul>$1</ul>'); // Wrap <li> in <ul>
    };

    const formattedEvaluation = convertMarkdownToHTML(evaluation);

    return (
        <div className="report-container">
            <h1>Evaluation Report</h1>
            <div className="report-content" dangerouslySetInnerHTML={{ __html: formattedEvaluation }} />
        </div>
    );
};

export default Report;