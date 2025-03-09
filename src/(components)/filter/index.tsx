"use client";
import { useEvent } from "@/stores/eventStore";
import InputCheckbox from "../inputCheckbox";
import { Section } from "./styled";
import SetFilter from "@/utils/filters";

export function Filter() {
  const { states, city, category, date } = SetFilter();
  const { filterEvents } = useEvent();

  const clearFilter = () => {
    filterEvents({});
  };

  return (
    <Section>
      <form action={clearFilter}>
        <div className="header">
          <h5>Filtro</h5>
          <button>Limpar</button>
        </div>

        <div className="item-form">
          <label>
            Data: <hr />
          </label>
          <input
            type="date"
            onChange={(e) => filterEvents({ date: e.target.value })}
          />
        </div>
        <div className="item-form">
          <label>
            Estado: <hr />
          </label>
          <div className="inputs state">
            {states.map((state) => (
              <InputCheckbox
                key={state}
                id={state}
                htmlFor={state}
                label={state}
                color="--white"
                onChange={() => filterEvents({ state })}
              />
            ))}
          </div>
        </div>
        <div className="item-form">
          <label>
            Cidade: <hr />
          </label>
          <div className="inputs city">
            {city.map((city) => (
              <InputCheckbox
                key={city}
                id={city}
                htmlFor={city}
                label={city}
                color="--white"
                onChange={() => filterEvents({ city })}
              />
            ))}
          </div>
        </div>
        <div className="item-form category">
          <label>
            Categoria: <hr />
          </label>
          <div className="inputs">
            {category.map((category) => (
              <InputCheckbox
                key={category}
                id={category}
                htmlFor={category}
                label={category}
                color="--white"
                onChange={() => filterEvents({ category })}
              />
            ))}
          </div>
        </div>
      </form>
    </Section>
  );
}
