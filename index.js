const displayTime = () => {
    moment.locale("id");
    document.querySelector(".time").textContent = moment().format("LTS");
    document.querySelector(".date").textContent = moment().format("LL");
  };
  
  const updateTime = () => {
    displayTime();
    setTimeout(updateTime, 1000);
  };
  
  updateTime();
  