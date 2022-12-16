import React, { useContext } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { FourLeafClover } from '../FourLeafClover/FourLeafClover'
import { Select } from '../Select/Select'
import * as Styles from "./Styles"

export const Content = ({theme}) => {
  const { states } = useContext(GlobalStateContext)

  return (
    <Styles.Container theme={theme}>
      <Styles.Main>
        <Select />

        <Styles.SectionMain>
          <FourLeafClover />
          <h1>{states.nome}</h1>
        </Styles.SectionMain>

        <Styles.Footer>
          <p>Concurso: </p>
          <p>{states.numeroConcurso} - {new Date(states.dataConcurso).toLocaleDateString()}</p>
        </Styles.Footer>
      </Styles.Main>
      <Styles.Aside>
        <Styles.SectionAside>
          <span>{states.acumulou && states.acumulou ? "Acumulou !" : `Ganhadores: ${states.ganhadores && states.ganhadores}`}</span>
          <Styles.NumbersList>
            {states.dezenas && states.dezenas.map((dezena, i) => {
              return <li key={i}>{dezena}</li>
            })}
          </Styles.NumbersList>
          <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
        </Styles.SectionAside>
      </Styles.Aside>
    </Styles.Container>
  )
}
