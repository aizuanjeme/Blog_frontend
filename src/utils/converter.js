export function addThreeDots(string, limit = 100) {
    var dots = "...";
    if (string?.length > limit) {
      string = string.substring(0, limit) + dots;
    }
  
    return string;
  }