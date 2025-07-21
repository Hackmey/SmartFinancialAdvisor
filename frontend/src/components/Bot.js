import ChatBot from "react-chatbotify";
import React, { use } from "react";

export const Bot = ({userData}) => {

  console.log("User Data in Bot:", userData);
  userData = userData ? JSON.parse(userData) : {};
  if (!userData.name) {
    userData.name = "User"; 
  }
  const marketData = {
    stocks: [
      { symbol: "ABC", name: "ABC Bank Ltd", growth_pct_yoy: 10.5 },
      { symbol: "XYZ", name: "XYZ FinServ", growth_pct_yoy: 15.2 }
    ],
    mutual_funds: [
      { code: "MF_EQ_EQTY", name: "FinTech Equity Opportunities", return_pct_3y_cagr: 14.8 },
      { code: "MF_BAL_MOD", name: "Balanced Growth Fund", return_pct_3y_cagr: 9.2 }
    ],
    fixed_deposits: [
      { bank: "SafeBank", tenure_months: 12, rate_pct: 6.0 },
      { bank: "SafeBank", tenure_months: 36, rate_pct: 7.1 }
    ]
  };

  const handleChat = async (params) => {
    const query = {
      userData: userData,
      marketData: marketData,
      input: params
    }

    // console.log(userData)
    
    console.log("Sending data to backend:", JSON.stringify(query));
    try {
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(query)
    });

    const data = await response.json();
    return data.message || "Sorry, I couldn't process your request.";
  } catch (error) {
    console.error("Error sending data to backend:", error);
    return "An error occurred while processing your request. Please try again later.";
  }

  }

  const flow = {
    start: {
      message: "Hey " + userData["name"]  + ", How can I help you?",
      path: "end"
    },
    end: {
      message: (params) => handleChat(params.userInput),
      chatDisabled: false,
      path : "end"
    }
  }

  const themes = [
    {id: "minimal_midnight", version: "0.1.0"},
    {id: "simple_blue", version: "0.1.0"}
  ]

  const settings = {
    header: {
		title: (
			<div style={{cursor: "pointer", margin: 0, fontSize: 20, fontWeight: "bold"}}>
				FinGuide
			</div>
		),
		showAvatar: true,
	},
  chatHistory: {
		disabled: true,
	},
    botBubble: {
		animate: true,
		showAvatar: false,
		// avatar: botAvatar,
		simulateStream: false,
		streamSpeed: 30,
	},
    tooltip: {
		mode: "NEVER",
	},
    chatButton: {
		icon: "bot.jpeg",
	},
  }


  return (
    <ChatBot flow={flow} themes={themes} settings={settings}/>
  );
};
