# Data Model: Sistema de Pistas

## Entities

### `Trupe` (Suspeito)
Representa um membro da trupe da Carmen Sandiego.

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `nome` | `string` | Nome único do suspeito |
| `sexo` | `enum('Masculino', 'Feminino')` | Gênero |
| `hobby` | `HobbyType` | Preferência de atividade (Tênis, Futebol, etc.) |
| `cabelo` | `HairColorType` | Cor do cabelo |
| `caracteristica` | `FeatureType` | Marca distintiva (Óculos, Cicatriz, etc.) |
| `veiculo` | `VehicleType` | Meio de transporte |
| `outro` | `string` | Informação biográfica adicional |

### `Clue` (Pista)
Representa a informação entregue ao jogador.

```typescript
interface Clue {
  text: string;           // O texto formatado (ex: "Vi um homem de cabelo preto")
  type: 'suspect' | 'city'; // Se a pista é sobre o vilão ou o destino
  relevance: number;      // Grau de importância (opcional para v2)
}
```

## State Transitions

1. **Investigação**: `Localização` + `Vilão` -> `Pista`
2. **Filtragem**: `Lista[Trupe]` + `Filtros` -> `Lista[Trupe] (Reduzida)`
3. **Emissão de Mandado**: `Lista[Trupe].length === 1` -> `Mandado(Suspeito.nome)`
