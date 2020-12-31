/**
 * Brutk style components for å lage mønsteret(grid) med kalenderelementene(hatch)
 */
import styled from 'styled-components';
export const HatchGrid = styled.div`
display:grid;
grid-gap:20px;
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
padding: 40px;
`
