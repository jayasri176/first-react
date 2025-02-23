import React, { useState } from "react";
import { motion } from "framer-motion";

const CodeReviewFeedback = () => {
  const aspects = ["Readability", "Performance", "Security", "Documentation", "Testing"];
  
  const [votes, setVotes] = useState(
    aspects.reduce((acc, aspect) => {
      acc[aspect] = { upvotes: 0, downvotes: 0 };
      return acc;
    }, {})
  );

  const handleVote = (aspect, type) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [aspect]: {
        ...prevVotes[aspect],
        [type]: prevVotes[aspect][type] + 1,
      },
    }));
  };

  return (
    <div style={styles.feedbackContainer}>
      {aspects.map((aspect) => (
        <div key={aspect} style={styles.card}>
          <h3>{aspect}</h3>
          <div style={styles.buttons}>
            <button style={styles.upvote} onClick={() => handleVote(aspect, "upvotes")}>
              Upvote
            </button>
            <button style={styles.downvote} onClick={() => handleVote(aspect, "downvotes")}>
              Downvote
            </button>
          </div>
          <motion.div
            style={styles.voteCount}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.2 }}
          >
            <p>Upvotes: {votes[aspect].upvotes}</p>
            <p>Downvotes: {votes[aspect].downvotes}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  feedbackContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px",
  },
  card: {
    background: "white",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "200px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    margin: "10px 0",
  },
  upvote: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "8px 12px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    borderRadius: "5px",
  },
  downvote: {
    backgroundColor: "#dc3545",
    color: "white",
    padding: "8px 12px",
    border: "none",
    cursor: "pointer",
    fontSize: "14px",
    borderRadius: "5px",
  },
  voteCount: {
    fontSize: "14px",
    margin: "5px 0",
  },
};

export default CodeReviewFeedback;
