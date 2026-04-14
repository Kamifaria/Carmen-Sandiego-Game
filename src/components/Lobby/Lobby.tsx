import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/AuthContext";
import { getDifficultySettings } from "../../utils/gameLogicUtils";
import { trupeiros } from "../../utils/trupeUtils";
import {
  StyledLobby,
  LobbyContent,
  LobbyHeader,
  RankCard,
  BadgeIcon,
  StatsGrid,
  StatItem,
  MissionButton,
  CriminalsGrid,
  CriminalCard,
} from "./Lobby.styles";

const Lobby: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [casesResolved, setCasesResolved] = useState(0);

  // Carregar dados reais do usuário
  useEffect(() => {
    const username = localStorage.getItem("username") || user?.username;
    if (username) {
      fetch('http://localhost:3001/api/user/' + username)
        .then(res => res.json())
        .then(data => {
          if (data && data.user) {
            setCasesResolved(data.user.casesResolved || 0);
          }
        })
        .catch(console.error);
    }
  }, [user]);

  const difficulty = getDifficultySettings(casesResolved);

  return (
    <StyledLobby>
      <LobbyContent>
        <LobbyHeader>
          <h1>V.I.L.E. Tracker HQ</h1>
          <p style={{ color: "#8892b0", fontFamily: "Space Mono" }}>Acesso Autorizado // Detetive {user?.username}</p>
        </LobbyHeader>

        <RankCard>
          <BadgeIcon>👮</BadgeIcon>
          <div style={{ flex: 1 }}>
            <h2 style={{ margin: 0, color: "#e6f1ff" }}>{difficulty.rankName}</h2>
            <div style={{ 
              width: "100%", 
              height: "10px", 
              background: "#112240", 
              borderRadius: "5px", 
              marginTop: "10px",
              border: "1px solid #64ffda"
            }}>
              <div style={{ 
                width: `${Math.min((casesResolved % 5) * 20, 100)}%`, 
                height: "100%", 
                background: "#64ffda", 
                borderRadius: "5px",
                transition: "width 0.5s" 
              }} />
            </div>
            <p style={{ margin: "5px 0 0 0", fontSize: "0.8rem", color: "#64ffda" }}>
              Próxima Promoção: {5 - (casesResolved % 5)} casos restantes
            </p>
          </div>
        </RankCard>

        <StatsGrid>
          <StatItem>
            <label>Casos Resolvidos</label>
            <span>{casesResolved}</span>
          </StatItem>
          <StatItem>
            <label>Nível de Periculosidade</label>
            <span>{difficulty.rankName.split(' ')[0]}</span>
          </StatItem>
          <StatItem>
            <label>Status da Agência</label>
            <span style={{ color: "#64ffda" }}>ONLINE</span>
          </StatItem>
        </StatsGrid>

        <div style={{ marginTop: "30px" }}>
          <h3 style={{ fontFamily: "Space Mono", color: "#64ffda", textTransform: "uppercase" }}>Arquivo de Procurados</h3>
          <CriminalsGrid>
            {trupeiros.map((criminal, index) => (
              <CriminalCard 
                key={index} 
                captured={index < casesResolved} // Simulação: libera conforme vence casos (pode ser melhorado depois)
                title={criminal.nome}
              >
                <img src={criminal.imagem} alt={criminal.nome} />
              </CriminalCard>
            ))}
          </CriminalsGrid>
        </div>

        <MissionButton onClick={() => navigate("/game")}>
          Iniciar Nova Missão
        </MissionButton>
      </LobbyContent>
    </StyledLobby>
  );
};

export default Lobby;
