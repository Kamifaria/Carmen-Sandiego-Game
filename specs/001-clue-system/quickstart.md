# Quickstart: Sistema de Pistas

Este guia descreve como utilizar o novo `clueService.ts` para integrar pistas no jogo.

## Como gerar uma pista
No componente de localizações (ex: quando clicar em investigar):

```typescript
import { generateClue } from '../../services/clueService';

const pista = generateClue(currentVillain, nextCityInPath);
setBottomMessage(pista.text);
```

## Como filtrar suspeitos
No componente do computador (Interpol Computer):

```typescript
import { filterTrupe } from '../../services/clueService';
import { trupeiros } from '../../utils/trupeUtils';

const filtered = filterTrupe(trupeiros, activeFilters);
```

## Estrutura de Filtros
O objeto de filtros deve seguir o contrato:
```typescript
{
  sexo: string;
  hobby: string;
  cabelo: string;
  caracteristica: string;
  veiculo: string;
}
```
Valores vazios `""` são ignorados no filtro.
