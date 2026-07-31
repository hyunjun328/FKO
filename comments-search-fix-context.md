# Comment and duplicate-search fix context

- The deployed `create_guest_comment` RPC is present. A deliberately invalid target returned the expected database validation error, so the server-side write route is installed.
- The client previously hid every failed save behind one generic message. It now shows the returned database error or a network-specific error, trims the text, and refreshes the thread after a successful save.
- Fighter search results are sorted by the lowest available rank in the official, Fight Matrix, and unranked result paths.
