import type { TopicQuestions } from '../../types/question'

export const topic22Questions: TopicQuestions = {
"id": 22,
"slug": `topic-22`,
"title": `Сети`,
"junior": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `22-junior-общее-1`,
"title": `IP-адрес, порт, DNS, localhost.`,
"fullAnswer": `## IP-адрес, порт, DNS и localhost

IP-адрес идентифицирует сетевой интерфейс/узел в IP-сети. Порт идентифицирует конкретный сетевой сервис на хосте. DNS преобразует доменные имена в IP и другие записи. \`localhost\` обычно указывает на loopback самого компьютера.

**Ключевые моменты:**
- IPv4 loopback обычно 127.0.0.1, IPv6 — ::1.
- Порт — число 0–65535.
- DNS может возвращать несколько адресов и кэшируется.`,
"shortAnswer": `IP-адрес, порт, DNS и localhost IP-адрес идентифицирует сетевой интерфейс/узел в IP-сети.  Порт идентифицирует конкретный сетевой сервис на хосте.`,
},
{
"id": `22-junior-общее-2`,
"title": `Клиент и сервер, протокол, стек TCP/IP, OSI модель.`,
"fullAnswer": `## Клиент, сервер, протокол, TCP/IP и OSI

Клиент инициирует взаимодействие, сервер принимает запросы и предоставляет сервис. Протокол задаёт правила обмена. TCP/IP — практический стек Интернета; OSI — концептуальная семиуровневая модель.

**Ключевые моменты:**
- Application: HTTP/DNS и др.
- Transport: TCP/UDP.
- Internet/Network: IP.
- Link: Ethernet/Wi‑Fi.`,
"shortAnswer": `Клиент, сервер, протокол, TCP/IP и OSI Клиент инициирует взаимодействие, сервер принимает запросы и предоставляет сервис.  Протокол задаёт правила обмена.`,
},
{
"id": `22-junior-общее-3`,
"title": `TCP и UDP, IPv4 vs IPv6.`,
"fullAnswer": `## TCP, UDP, IPv4 и IPv6

TCP — соединительный надёжный поток с порядком и retransmission. UDP — дейтаграммы без гарантии доставки/порядка, но с меньшим overhead. IPv4 использует 32-битные адреса, IPv6 — 128-битные.

**Ключевые моменты:**
- UDP применяют там, где приложение само управляет потерями/задержкой.
- IPv6 имеет намного больше адресное пространство.
- HTTP/3 использует QUIC поверх UDP.`,
"shortAnswer": `TCP, UDP, IPv4 и IPv6 TCP — соединительный надёжный поток с порядком и retransmission.  UDP — дейтаграммы без гарантии доставки/порядка, но с меньшим overhead.`,
},
{
"id": `22-junior-общее-4`,
"title": `Subnet mask, gateway, router, switch, firewall.`,
"fullAnswer": `## Subnet mask, gateway, router, switch и firewall

Subnet mask/prefix определяет локальную сеть. Default gateway — маршрутизатор для адресов вне локальной подсети. Router пересылает IP-пакеты между сетями, switch соединяет устройства внутри L2-сети, firewall фильтрует трафик по правилам.

**Ключевые моменты:**
- CIDR \`/24\` соответствует 24 битам сетевой части.
- Switch обычно принимает решения по MAC, router — по IP routes.
- Firewall может быть host-based или сетевым.`,
"shortAnswer": `Subnet mask, gateway, router, switch и firewall Subnet mask/prefix определяет локальную сеть.  Default gateway — маршрутизатор для адресов вне локальной подсети.`,
},
{
"id": `22-junior-общее-5`,
"title": `NAT, VPN, proxy, CDN, HTTP.`,
"fullAnswer": `## NAT, VPN, proxy, CDN и HTTP

NAT преобразует сетевые адреса/порты между сетями. VPN создаёт защищённый туннель. Proxy принимает трафик от имени клиента или сервера. CDN размещает кэш/edge-сервисы ближе к пользователям. HTTP — прикладной протокол request/response.

**Ключевые моменты:**
- Reverse proxy стоит перед серверами.
- CDN уменьшает latency и нагрузку на origin.
- VPN не делает приложение автоматически безопасным на прикладном уровне.`,
"shortAnswer": `NAT, VPN, proxy, CDN и HTTP NAT преобразует сетевые адреса/порты между сетями.  VPN создаёт защищённый туннель.`,
},
],
},
],
},
"middle": {
"sections": [
{
"id": `общее`,
"title": `Общее`,
"questions": [
{
"id": `22-middle-общее-1`,
"title": `3-way handshake, алгоритм Нейгла, TCP_NODELAY.`,
"fullAnswer": `## TCP handshake, Nagle и TCP_NODELAY

TCP-соединение обычно устанавливается обменом SYN → SYN-ACK → ACK. Алгоритм Nagle уменьшает число маленьких сегментов, задерживая часть отправок до ACK/накопления данных. \`TCP_NODELAY\` отключает Nagle, что полезно для некоторых latency-sensitive протоколов.

**Ключевые моменты:**
- TCP_NODELAY не нужно включать автоматически без измерений.
- Nagle может плохо взаимодействовать с delayed ACK в чатty протоколах.
- Handshake согласует начальные sequence numbers и состояние соединения.`,
"shortAnswer": `TCP handshake, Nagle и TCP_NODELAY TCP-соединение обычно устанавливается обменом SYN → SYN-ACK → ACK.  Алгоритм Nagle уменьшает число маленьких сегментов, задерживая часть отправок до ACK/накопления данных.`,
},
{
"id": `22-middle-общее-2`,
"title": `Управление перегрузками: window size, slow start, congestion avoidance, fast retransmit, fast recovery.`,
"fullAnswer": `## TCP congestion control

Receiver window ограничивает отправителя возможностями получателя (flow control), а congestion window — оценкой пропускной способности сети. Slow start быстро увеличивает окно до порога/признаков congestion, после чего рост становится осторожнее.

**Ключевые моменты:**
- Fast retransmit реагирует на duplicate ACK и повторно отправляет вероятно потерянный segment до timeout.
- Fast recovery избегает полного возврата к начальному состоянию после отдельных потерь.
- Конкретные congestion-control algorithms могут отличаться от классической схемы.`,
"shortAnswer": `TCP congestion control Receiver window ограничивает отправителя возможностями получателя (flow control), а congestion window — оценкой пропускной способности сети.  Slow start быстро увеличивает окно до порога/признаков congestion, после чего рост становится осторожнее.`,
},
{
"id": `22-middle-общее-3`,
"title": `MTU, fragmentation, TTL, ARP, ICMP, DHCP, BOOTP.`,
"fullAnswer": `## MTU, fragmentation, TTL, ARP, ICMP, DHCP

MTU — максимальный размер network-layer packet для канала без fragmentation. IP TTL/Hop Limit ограничивает число hops. ARP в IPv4 связывает IP с MAC в локальной сети. ICMP несёт диагностические/control сообщения. DHCP автоматически выдаёт сетевые параметры клиенту.

**Ключевые моменты:**
- IPv6 использует Neighbor Discovery вместо ARP.
- Path MTU Discovery помогает избежать fragmentation.
- BOOTP — более старый протокол, предшественник DHCP.`,
"shortAnswer": `MTU, fragmentation, TTL, ARP, ICMP, DHCP MTU — максимальный размер network-layer packet для канала без fragmentation.  IP TTL/Hop Limit ограничивает число hops.`,
},
{
"id": `22-middle-общее-4`,
"title": `TCP keep-alive, half-open, reset, FIN, state machine.`,
"fullAnswer": `## TCP connection states

Нормальное закрытие TCP использует FIN/ACK в каждом направлении, потому что потоки полудуплексно закрываются независимо. RST аварийно сбрасывает connection. Half-open возникает, когда стороны имеют несовпадающее представление о состоянии соединения.

**Ключевые моменты:**
- TCP keepalive периодически проверяет долго простаивающее соединение по настройкам ОС.
- Application-level heartbeat часто даёт более предсказуемое обнаружение проблем.
- TCP state machine включает LISTEN, SYN_SENT/RECEIVED, ESTABLISHED, FIN_WAIT, CLOSE_WAIT, TIME_WAIT и др.`,
"shortAnswer": `TCP connection states Нормальное закрытие TCP использует FIN/ACK в каждом направлении, потому что потоки полудуплексно закрываются независимо.  RST аварийно сбрасывает connection.`,
},
{
"id": `22-middle-общее-5`,
"title": `TIME_WAIT, CLOSE_WAIT, SYN flood, DDoS.`,
"fullAnswer": `## TIME_WAIT, CLOSE_WAIT, SYN flood и DDoS

\`TIME_WAIT\` обычно остаётся у стороны активного закрытия, чтобы старые сегменты не попали в новое соединение и можно было повторно подтвердить FIN. \`CLOSE_WAIT\` означает: peer прислал FIN, а локальное приложение ещё не закрыло socket.

**Ключевые моменты:**
- Много CLOSE_WAIT часто указывает на bug/утечку соединений в приложении.
- SYN flood истощает ресурсы полуоткрытых соединений; защиты включают SYN cookies, rate limiting и upstream mitigation.
- DDoS шире SYN flood и требует многоуровневой защиты/CDN/scrubbing.`,
"shortAnswer": `TIME_WAIT, CLOSE_WAIT, SYN flood и DDoS TIME_WAIT обычно остаётся у стороны активного закрытия, чтобы старые сегменты не попали в новое соединение и можно было повторно подтвердить FIN.  CLOSE_WAIT означает: peer прислал FIN, а локальное приложение ещё не закрыло socket.`,
},
],
},
],
},
}
