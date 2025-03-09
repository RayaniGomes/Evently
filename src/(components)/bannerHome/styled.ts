import styled from "styled-components";

export const ContainerBanner = styled.section`
  width: 100%;
  display: flex;
  margin-top: 5rem;

  .container {
    width: 100%;
    display: flex;
    max-width: 1320px !important;
    overflow: hidden;
    --bs-gutter-x: 0;
  }

  @media (width <= 1440px) {
    .container {
      max-width: 100% !important;
    }
  }
`;

export const Embla = styled.div`
  width: 100%;
  margin: auto;

  .embla__viewport {
    overflow: hidden;
  }

  .embla__container {
    display: flex;
    touch-action: pan-y pinch-zoom;
  }
`;

export const Slide = styled.div<{ image: string }>`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  transform: translate3d(0, 0, 0);

  .image {
    position: relative;
    width: 100vw;
    height: 100%;
    z-index: -1;
    background: url(${(props) => props.image}) no-repeat center center;
    background-size: cover;
  }

  .content {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    width: 500px;
    height: 100%;
    padding: 0 5rem;
    color: var(--white);
    right: 0;
    background: #10335680;
    backdrop-filter: blur(4px);
    border-radius: 50% 0 50% 50%;

    a {
      background-color: var(--white);
      color: var(--blue-dark);
      width: 200px;
      height: 40px;
      border-radius: 10px;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-weight: 600;

      &:hover {
        box-shadow: var(--drop-shadow-white-hover);
      }
    }
  }

  @media (max-width: 1024px) {
    .content {
      padding: 0 2rem 0 4rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 350px;

    .content {
      width: 100%;
      border-radius: 0;
      align-items: right;

      a {
        width: 100px;
        height: 30px;
      }
    }
  }
`;
