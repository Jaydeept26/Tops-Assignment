function subtotal() {
  let qty_11 = document.getElementById("qty_1").value;
  let prc_11 = document.getElementById("prc_1").value;

  let ttl_11 = (document.getElementById("ttl_1").innerHTML = qty_11 * prc_11);

  let qty_22 = document.getElementById("qty_2").value;
  let prc_22 = document.getElementById("prc_2").value;

  let ttl_22 = (document.getElementById("ttl_2").innerHTML = qty_22 * prc_22);

  document.getElementById("sttl").innerHTML = ttl_11 + ttl_22;
}
