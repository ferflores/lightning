function writeHtml(log){
  let now = new Date();

  return `<div class="log-record">
    <span><div class="log-icon" style="background-color:${log.color}"></div></span>
    <span class="log-time">${now.toLocaleString()}</span>
    <span class="log-country">${log.countryCode}</span>
    <span class="log-message">${log.message}</span>
  </div>`;
}

export default function(log){
  if($('#log .log-record').length > 50){
    $('#log .log-record:last-child').remove();
  }
  $('#log').prepend(writeHtml(log));
}
