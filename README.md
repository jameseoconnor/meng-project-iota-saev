# **Examining Distributed Ledger Technology (DLT) for V2X Communication: Road Condition Monitoring and Alerting System using the IOTA Streams Framework**

![Project Plan](https://github.com/jameseoconnor/meng-project-iota-saev/blob/main/docs/project_plan.png)


## Some of the code based on IOTA Dev Series
https://github.com/anistark/iota-dev-series.git/



## Author **James O&#39;Connor**

### **Masters in Engineering (MEng) in Connected and Autonomous Vehicles**

#### Institute of Technology, Sligo

Supervisor of Research: Donny Hurley


# CHAPTER ONE

## 1. INTRODUCTION

### 1.1 Problem Statement

With driverless cars already operational in a number of countries, autonomous driving systems are rapidly becoming a reality as a mode of intelligent transportation. It has been predicted that by 2025 there will be over eight million vehicles on our roads with level three and above autonomy [1], based on the SAE definitions for automation systems for on-road motor vehicles [2]. Vehicle-to-everything (V2X) communication is an over-arching term that encapsulates vehicle-to-vehicle (V2V), vehicle-to-infrastructure (V2I) and vehicle-to-pedestrian (V2P). With the projected rate of growth in vehicles of this magnitude, finding a way for these vehicles to communicate with each other, with users and with their environment that is secure, scalable and standardised remains an open research question [3]. From a security perspective, a number of challenges still exist including availability (flooding, blackhole and greyhole attacks), data privacy (eavesdropping, location tracking, non-repudiation), data integrity (injection, replay and spoofing attacks) and authenticity (Sybil and man-in-the-middle attacks) [3]. From a scalability perspective, it is estimated that 125 million cars with embedded connectivity will ship between 2018 and 2022, which will lead to higher traffic and usage of autonomous vehicle services and applications and their supporting DSRC and C-V2X protocols. In addition to this, as the industry moves towards autonomy, these supporting services and applications will also need to be autonomous to capture the benefits and opportunities of autonomous vehicles. In terms of standardization, there is no universal standardised framework for V2X integration. Many of the standards for 5G communication are still under development, and standards differ across countries, geopolitical areas and consortiums [4]. The lack of operability among heterogeneous devices poses a challenge to adoption rates of autonomous vehicles [3].

### 1.2 Rationale For Research

Approximately 94% of all serious accidents on roads are due to human error [5]. Autonomous vehicles have the capability to dramatically increase safety on our roads, which is beneficial on both an economic and societal level. From an environmental perspective autonomous vehicles can provide smooth traffic control, a reduction traffic congestion and vehicle ownership, cutting fuel cost and vehicle emissions [5]. The current challenges for V2X communication outlined in the problem statement (security, scalability and standardisation) could hinder the rollout and adoption of autonomous vehicles and inevitably the benefits that come with them. In order to solve for these issues a ubiquitous communication platform for frictionless data and value transfer between machines and humans that is secure, scalable and standardised may be the solution to this problem.

This is the promise by the open-source IOTA Framework. The IOTA framework is a relatively new Distributed Ledger Technology (DLT), a term synonymous with the recent blockchain paradigm. A distributed ledger is a database of recorded transactions between two parties that is shared and synced across multiple sites, institutions or geographies that is accessible by multiple people. The IOTA Foundation (a non-profit organization and creator of IOTA) defines it as the first distributed ledger technology solution built for the &quot;Internet of Everything&quot; that enables relationships between machines and humans through a network designed for exchanging value and data [6]. The core components of the IOTA framework are expanded upon in the literature review.

From a security perspective, distributed ledger technologies provide accurate and immutable records for data exchanges and interactions between users, vehicles and infrastructure. They are more resistant than the traditional client-server architectures to the aforementioned cyber-attacks such as Sybil and man-in-the-middle attacks due to the removal of the centralized server as a single point of failure [7]. Once a transaction is confirmed and added to the network, it cannot be modified or tampered with. Each time a transaction is added to the network, a cryptographic problem needs to be solved, which requires some computational power. This is called &quot;Proof-of-Work&quot; (PoW). The Tangle network uses PoW to discourage spamming through adapting the difficulty of the cryptographic problem to be solved if a node tries to spam the network. This has the potential to reduce the likelihood of Brute-Force and DDoS attacks on AVs and their supporting infrastructure.

From a scalability perspective, the Tangle network operates in such a way that it is more performant the more nodes participate in the network. In essence, it gets faster the more users it has [8].

From a standardisation perspective, the IOTA framework is open-source, feeless and can be run on any type of computing device that is connected to the internet. This is in contrast to the current state-of-the-art in V2X communication protocols. Already there are two protocols for V2X communications, namely the DSRC protocol developed in the US [9] and the ITS-G5 protocol developed to be the European standard [10], showing a divergence in approaches on a global level.

In recent years, DLT networks, particularly Proof-of-Work (PoW) networks have faced scrutiny over the energy cost of running their underlying networks. Each time a transaction is added to the network, a cryptographic problem is presented to the network to be solved or &quot;mined&quot; by a &quot;miner&quot;, which requires computational power and thus consumes energy. As a reward for this work, the miner that solves the problem first gets rewarded. Most notably, the Bitcoin network has been estimated to consume between 73 and 78.3 terrawatt-hours (TWh) per year due to this mining approach [11]. The Tangle network, by comparison, has no miners and all PoW is done on the node where the transaction originates, thus resulting in a drastic reduction in energy consumption to run the network. A recent paper classified the IOTA network as &quot;exceptional&quot; when comparing the network to other networks and payment protocols such as Bitcoin, Ethereum, VISA and Mastercard [12].

In order to explore the IOTA framework, a use-case scenario is presented in this research proposal. All modern vehicles have an On-Board Unit (OBU) which acts as an interface between the cars many modules. When an event occurs, such as an activation of traction control, or heavy braking, this message is sent to the OBU via the CANBus to be broadcast to nearby vehicles using the DSRC radio transmitter. The CANBus is the centralized control system for a vehicles many electronic control units (ECUs).

The use-case scenario to test the applicability of the IOTA framework will be to also broadcast these messages to the Tangle network.

In terms of the use-case scenario; there are many potential advantages to investigating this:

1. The ability for the IOTA framework to provide seamless data and value transfer between autonomous vehicles can be tested.
2. Machine learning models can be deployed to create a smart grid; where vehicles can forecast poor condition of roads at any point in time.

The IOTA framework has already been proven to work in a number of use cases, and this is further expanded upon in the literature review. However, as of September 2021 the IOTA foundation launched IOTA 2.0 with a number of radical upgrades, including a fully decentralized network, more robust security features, marking an important milestone in the IOTA foundation history [13]. The IOTA foundation have also, as of 2021, introduced smart contract capabilities [14]. Smart contracts are digital contracts stored on a blockchain that automatically get executed when predetermined conditions are met [15]. Combining the IOTA framework with smart contract functionality could have huge potential for automating service and applications within the autonomous vehicle eco-system. As of today this space has been relatively unexplored.

### 1.3 Purpose and Scope

This research has two purposes. The predominant purpose is to examine the demonstrate the benefits and limitations of the IOTA 2.0 Framework for V2X communication (data and value transfers). To be specific, this research will:

1. Compare DLT to the current state-of-the-art to traditional architectures.
2. Identify the benefits and limitations of the IOTA Framework.
3. Quantify the ease of developing decentralized applications using the IOTA framework.
4. Propose an approach to deploying next-generation applications for autonomous vehicles.
5. Highlight future applications and areas for future research.

The scope of this research will be limited to a simple use-case scenario: an application that publishes warnings to the Tangle Network, aggregates vehicle data and publishes messages to vehicles to warn about potential road hazards. Warning messages that are currently available in the OBU include:

- Heavy Braking
- Wipers – High
- Traction Control
- Chassis Sensor - Severe Bounce
- Antilock Brakes

## 1.4 Hypothesis

In order to examine the new IOTA 2.0 framework and its applications in detail, the following hypothesis is proposed:

**The IOTA framework can be used as a viable V2X communication layer that allows for secure and scalable OBU data transfer between autonomous vehicles to forecast and share potentially dangerous road conditions among nodes in the IOTA network.**

# CHAPTER TWO

## 2.Literature Review

### 2.1 Distributed Ledger Technology

The definition of Distributed Ledger Technology (DLT) is not an easily defined concept. Definitions can be wide-varying and often conflicting, depending on the author, audience and industry in which it is defined. Some definitions are more ontological with others being more technical.

Rauchs _et al_ [16] defines DLT as a consensus machine; a system with multiple actors who agree on a set of shared data and its validity, in the absence of a centralized co-ordinator. In comparison to traditional databases, both distributed and centralized, DLTs key features are rooted in data integrity in an adversarial environment. It is a system of electronic records that enables a network of participants (nodes) to reach a consensus on the authoritative order of transactions, which are linked using cryptographic hashes and persisted across all nodes of the network. This multi-party consensus produces a ledger, which is the authoritative version of transaction history.

In the financial realm, the European Central Bank defines DLTs as a technology that enables users to store and access information relating to one or more assets in a shared database of transactions and balances [17]. A transaction is a cryptographically signed authorised attempt to change the status of this database. It allows users to reach a consensus on a specific version of the ledger, meaning that with enough actors, there cannot be any manual alteration of the ledger. Cryptographic solutions with economic incentives replace the concept of central validation.

At the core of all DLTs are transactions; a consensus-backed record of a transfer of value or data between two nodes in a decentralized network of nodes.

#### 2.1.1 Blockchain as form of DLT

DLT has been around in concept since the mid 1990s, built on a thought experiment on a consensus mechanism called &quot;The Byzantine Generals&#39; Problem&quot; created in 1982 [18]. In many cases the terms DLT and blockchain are used interchangeably. In some sense this is true, blockchain is a type (and most popular form) of DLT. Bitcoin, which is a cryptocurrency developed in 2008 under the pseudonym Satoshi Nakamoto [19], made use of the blockchain protocol and brought the technology into mainstream focus for the first time.

Ethereum is another open-source blockchain protocol second in popularity and similar to the Bitcoin protocol, but with the addition of smart contract functionality. Smart contracts are codified business rules that automatically execute on network nodes allowing the network to operate in a fully autonomous and decentralized manner [20].

#### 2.1.1.1How it works – Need to Expand

Unverified transactions are collected in a &quot;mempool&quot;, then organised into a logical data structure called a block, and finally a hash function is computed by miners using the block data, the previous block hash, a random integer and the current block number.

#### 2.1.2 DLT Tech in AV industry

Although research into DLTs has been increasing rapidly over the last ten years, the research within the CAV space, seems to be lagging behind other industries such as the financial, healthcare and education.

Rathee _et al_ [21] looked at using a blockchain framework for securing CAVs from smart device tampering by malicious attackers looking to compromise the communication channels of the vehicles. Using a blockchain framework, where vehicles operate as both nodes in the network, (much like the structure of today&#39;s VANETs), each vehicle is aware of all valid actors and devices in the network. Any alteration or deletion of information to vehicle data or user data will come to the notice of other devices. This approach showed a 79% success rate in the detection of malicious attacks when compared to the traditional VANET architecture.

(Security, Secure Communication)

Pustisek _et al._ [22] highlight the need for novel Machine-to-Machine (M2M) communication paradigms to connect energy producers, consumers and providers. This paper states that blockchain transactions could be fundamental to energy trading applications and platforms. This paper highlights the possibility for the use of the Ethereum platform to build this trading application. [22] concludes by highlighting the abundance of additional service applications that could be built on top of this using the Ethereum platform including reservation of charge points, selection based on traffic conditions, battery status, charging intensity.

(Energy Trading, Ethereum)

Indicative of the advance in the technology, five years since [22] outlined a conceptual model, [23] built on this idea by creating a fully-fledged P2P payment and energy trading system using IBM blockchain technology. This solution aims to reduce the level of human interaction and increase privacy, transparency and trust among EV participants. Scalability was also highlighted as another key benefit of blockchain technology, in this instance, optimal transaction confirmations of 825 per second were observed.

(Energy Trading, IBM, Scalability)

From a security perspective, Gupta _et al._ [24] explores the use of blockchain to increase the robustness of AV security to cyberattacks. The study proposes that the majority of solutions to current cybersecurity threats to AVs today are based on centralized hub-and-spoke architecture which creates a single point of failure and that blockchain-based solutions. Research challenges highlighted include system throughput, scalability, and proper authentication of nodes prior to joining the network.

(Cybersecurity, Traditional Architecture)

Modern vehicles purport to have over a hundred million lines of code [25],which will need to be maintained and updated regularly. [26] designed a blockchain-based firmware update scheme for autonomous vehicles, utilising the decentralised architecture to use AVs push updates to other required vehicles. Interestingly, with the use of smart contracts, the AVs get compensated by the manufacturers for participating through a rewarding system.

(Reward Mechanism, Firmware, Update)

#### 2.1.3 Intro to IOTA

The above literature is a review of blockchain-based DLTs. IOTA is a little different, and will be discussed in the next section.

### 2.2 The IOTA Framework

The IOTA framework was founded in 2015 by Sergey Ivancheglo, Serguei Popov, David Sønstebø, and Dominik Schiener in Berlin. The IOTA Foundation defines IOTA as &quot;an open, feeless data and value transfer protocol&quot;. It is based on DLT principles and was originally built specifically for the IoT industry. While also considered a DLT, its underlying ledger data structure is not based on a chain of blocks but rather a Directed Acyclic Graph (DAG) data structure. Coined by the foundation, &quot;The Tangle&quot; is a moniker for this DAG data structure on which the network is based [27].

At the core of all DLTs is a _ledger_, a _network of__nodes_ and _transactions_. In the context of the IOTA framework, the words transaction and message are used interchangeably. The term ledger and the Tangle are also used interchangeably The three components are outlined below.

#### 2.2.1 The Tangle (The IOTA Ledger)

The Tangle is the ledger for storing these transactions in such a way that they become immutably and cryptographically linked in a tree-like graph (See Figure X). This graph consists of vertices and directed edges and grows in only one direction (&quot;Directed&quot;) and vertices never directly or indirectly reconnect with themselves (&quot;Acyclic&quot;). IOTA takes advantage of this structure, combined with numerous cryptography techniques to create its ledger of transactions. Each vertex in the graph represents a transaction and each directed edge represents a transaction confirmation.

![Shape1](RackMultipart20211204-4-ox5gk0_html_f377bed64093cccb.gif) ![](RackMultipart20211204-4-ox5gk0_html_c1a40c2ecd3995e7.png)

**Figure 1: The Tangle Data Structure [28]**

The main idea of the tangle is as follows; in order to create a new transaction on the

Tangle (represented as vertices Figure 1), users must work to approve two other transactions Tangle (represented as edges in Figure 1). All of this is done using the nodes on the network. node uses Markov Chain Monte Carlo (MCMC) algorithm to randomly select a tip from the tangle. A tip represents unapproved transactions in the tangle graph [26].

As the network is asynchronous, all participating nodes do not see the same set of transactions at any point in time. Therefore, it is possible that conflicting transactions will exist in the tangle. An example of this is if person A had 100 coins in total and sent 100 coins to person B and shortly after sent 100 coins to person C, before the first A-B transaction could be confirmed. This is a conflicting transaction and is called &quot;double-spending&quot;. The job of the nodes is to decide which of these transactions &quot;make the most sense&quot; through consensus. The way in which consensus is achieved is through an algorithm called Fast Probabilistic Consensus (FPC) [29], whereby if a node detects a conflicting transaction, it will query other random nodes multiple times for their opinion. If a supermajority of nodes prefer one transaction, then the final consensus is 1 with high probability [29]. Transactions that do not meet the consensus of nodes get orphaned and are not confirmed.

Transactions have two properties – _weight_ and _cumulative weight_. The weight of a transaction refers to how much PoW was done by the issuing node and can only have values in the set (1, 3, 9.., ). A higher number representing a greater degree of work, and hence importance. Cumulative weight is the transactions own weight in addition to the sum of the weights of the transactions that directly or indirectly approve the transaction. For example, in Figure 2, the weight of transaction A, C, D and E is 1. The weight of F and B is 3, indicating more PoW was done by the issuing node. Also in Figure 2, F has a cumulative weight of 9 as it is directly and indirectly referenced by A, B, C and E which have weights of 1, 3, 1 and 1 respectively. Therefore the cumulative weight of F is 1 + 3 + 1 + 1 + 3 (own weight of F) = 9. Transactions with high cumulative weights are usually older, have more verifications and can be trusted with greater confidence.

![](RackMultipart20211204-4-ox5gk0_html_cad4be99c6af1b5b.png)

**Figure 2: Tangle transaction cumulative weights [27]**

#### 2.2.2 IOTA Nodes

Nodes are computers that provide the network computation and storage, and are connected in a peer-to-peer (P2P) manner. Nodes act as gatekeepers to the Tangle. As of December 2021, there are currently 327 nodes running the network [30]. Nodes in the IOTA network run the core software and have three main functions:

1. To validate transactions and add them to the ledger
2. To enable read/write access to the Tangle
3. To store the ledger and keep it in sync with the rest of the network

Nodes relay information across the network using a gossip protocol. This involves participating nodes receiving messages from a neighbouring node and forwarding them to other neighbouring nodes. Using this gossip protocol allows all participating nodes to be aware of new transactions and updates to the ledger.

As the network scales, congestion becomes an issue, much like an internet server crashing if too much web traffic is directed at it. Blockchain technologies solve this congestion problem in a number of ways. Both the Bitcoin and Ethereum protocols have a similar solution, using miners as leaders to organise and validate blocks of transactions before they are added to the network ledger. As IOTA does not use blocks or miners to run the network, to solve this problem, nodes employ the IOTA congestion control algorithm (ICCA) [31]. This algorithm uses a scheduler to determine which transactions are written to the ledger, a blacklister function to censor malicious nodes and a rate setter to adjust the rate at which messages can be added to the network. This makes nodes resistant to DDoS attacks – as it does not allow a single node to spam the network with messages.

![](RackMultipart20211204-4-ox5gk0_html_bec3e121133762af.png)

**Figure 3: An IOTA Node**

As IOTA began with IoT in mind, these nodes were designed to run on all types of devices. Sori _et al._ [12] measured the computational cost of validating a transaction on an IOTA node, and gave it an exceptional rating in comparison to other protocols such as Bitcoin, Ethereum and Visa.

Devices do not necessarily have to run as _full nodes_ (nodes that validate transactions and store the ledger state) to contribute to the network; devices can connect to any full node as an endpoint using the IOTA client libraries. These are called _light nodes_. Distributing these connections among full nodes becomes an issue for network optimisation. In recognising this limitation Hellani _et al._ [32] created a load balancer for IOTA light nodes balance message approval requests among full nodes based on number of current active connections, managing to improve balancing of data traffic among nodes in the network.

In the context of V2X technologies, vehicles could operate as either a light node or a full node in the IOTA network, allowing themselves to submit transactions to read and write messages to the tangle.

#### 2.2.3 IOTA Transactions (Messages)

A transaction, or message to use the IOTA term is an information object broadcast and gossiped around the network to enable the transfer data or value (or both) between two participating entities within the network. Unlike blockchain technologies like Bitcoin and Ethereum, adding messages to the tangle ledger is feeless. Blockchain mining is computationally and financially expensive. In comparison to these aforementioned blockchain technologies where users can pay a transaction fee incentivising miners to include their messages on the blockchain ledger, IOTA does not use miners, hence no transaction fees, making micro-transactions between entities economically viable.

Message objects are created on devices using IOTA client libraries and sent to network nodes for validation. A message object has a number of requirements, most notably the message cannot exceed 32KiB, it must be signed with the devices private key and must include in its payload a reference to between 2-8 parent message IDs already confirmed on the tangle. The node selects these messages IDs using an algorithm called Uniform Random Tip Selection (URTS), and provides them to the client. Once the node receives the formatted message from the client, it has to solve a cryptographic puzzle in the form of a hash function, to produce a hash value that meets the requirements defined by the IOTA. This is called &quot;Proof-of-Work&quot;. Korotkyi _et al._ [33] tested the speed of producing this hash value by an IOTA node using hardware accelerators and showed transaction confirmation times of 0.42 seconds. This is orders of magnitudes faster than the Bitcoin transaction time, which takes 25 minutes on average to confirm transactions [34].

As the rate of messages being sent to nodes for validation increases, so too does the hash function difficulty, creating a natural DDoS and Sybil attack prevention for the network nodes.

Value transfers are enabled by transferring IOTAs native cryptocurrency called MIOTA. MIOTA can be bought using other cryptocurrencies or _fiat_ currency. Fiat is a term used in the cryptocurrency industry to define a currency backed by a government or economic bodies e.g. US Dollar, Euro. There is a fixed amount of IOTA tokens in circulation, and at all times, the sum of all tokens recorded on the ledger must equal the original amount minted when the network was created. This ensures that tokens cannot be double-spent or forged.

Data transfers work in much the same way as value transfers, without the exchange of IOTA tokens. The ability to transfer data for free is a major differentiator between them and other DLT technologies, the IOTA foundation claims [31].

This research will focus on the secure data transfer between entities (V2X) using zero-value messages. Value transactions are out of scope for this research, but are an area for future research.

#### 2.2.4 IOTA Products

IOTA has a number of layer 2 applications built on top of the core components of framework which will be used in this research.

##### 2.2.4.1 IOTA Access

To Do

##### 2.2.4.2 IOTA Streams

IOTA Streams is an open-source message-oriented cryptographic protocol for decentralized data encryption and streaming. The final alpha version of this product was released on October 15th 2020 [35]. It allows devices to communicate securely and privately on the Tangle, and in theory ensuring communication data is stored in an immutable, decentralized and tamper-proof way on the ledger.

Streams are comprised of two roles: Authors and Subscribers. An Author can create a channel, and share session key information with Subscribers allowing both parties to interact privately and securely.

To date, there has been no major studies on IOTA Streams, due to the product being in its nascence. Streams will be the communication tool used to develop the use case scenario. Other studies have been conducted using the legacy version of IOTA Streams called Masked Authenticated Messaging (MAM). Lamtzidis _et al._ [36] created a distributed sensor node system to collect store and process data using MAM and IOTA protocol to enable M2M transactions of value and data.

However, MAM has been criticized for a number of limitations, which led to the creation of IOTA Streams.

This research will look at using IOTA Streams as a communication protocol between vehicles and a road condition monitoring and alerting system.

##### 2.2.4.3 IOTA Identity

To Do

#### 2.2.5 Current IOTA Use Cases

The IOTA framework has already demonstrated value in a number of areas. In [37] a DLT-based charging and billing mechanism for EAVs was proposed to demonstrate machine-to-machine (M2M) micropayments for electric vehicles. The study conceptualised the charger-to-vehicle relationship using a Raspberry Pi and a temperature sensor; and created a framework that demonstrated the viability of using the Tangle for transferring value from one machine to another. In [38] the authors examined the Tangle as a viable alternative to the shortcomings of traditional blockchains for vehicular applications, namely large transaction confirmation times, concluding smaller transaction delays as well as high performance using the encryption mechanism provided by the Tangle.

From an implementation perspective, Jaguar Land Rover, in collaboration with the Mobility Open Blockchain Initiative (MOBI) have demonstrated a system using the IOTA framework that allows drivers to earn cryptocurrency by allowing their cars to report useful road conditions including potholes and traffic congestion to authorities and navigation providers [39]. Another interesting project based on the IOTA framework was carried out by the research institute ElaadNL who have created &quot;the first ever IOTA-based EV charging station&quot; [40]. This research group built both the charging station hardware as(information which would traditionally be stored on a centralized server) was investigated. Both studies proved that the framework was lightweight enough to create a decentralized and scalable access control framework solution for IoT devices.

In [41] and [42] the use of the IOTA framework for access control of IoT systems was studied.

### 2.3 V2X Technology

#### 2.3.1 Intro

V2X technology is synonymous with connected vehicles. It defines as the wireless technology that enables data exchange between vehicles and their surroundings. Without the ability to connect vehicles to each other and their surroundings in a secure, private and low-latency manner, applications of connected vehicles will be limited.

#### 2.3.2 OBU

Modern vehicle use an On-Board Unit (OBU) to communicate with other vehicles that are also equipped with an OBU and communicate with the infrastructure (V2I) by connecting to Road Side Units (RSUs) and other networks (V2N). Typically, an OBU has a number of components including a GPS/GNSS receiver, a DSRC radio for reception and transmission, a processor, and interfaces with modules such as a CAN, Security, Ethernet or GPS for obtaining the vehicle data. Host vehicles (HVs) and remote vehicles (RVs) communicate using Basic Safety Messages (BSM), which are standardised packets of data transmitted and received between vehicle OBUs. These messages are decoded and used for multiple applications including predicting crashes and alerting drivers of any imminent dangers. This standard ensures that all vehicles can &quot;speak the same language&quot;, which will enable developers and manufacturers to develop safety applications to reduce fatalities and crashes [43]. Figure X shows a breakdown of the main OBU components for a Dedicated Short Range Communication (DSRC)-based system.

![](RackMultipart20211204-4-ox5gk0_html_7d10f121f496e24e.png)

**Figure 4: A DSRC-Based OBU [43]**

#### 2.3.3 V2X Standards

As with many technologies, the approach to V2X standards and protocols has varied. Two major standards have emerged. The first protocol, DSRC originated when the US Federal Communications Commission (FCC) licensed 75MHz of bandwidth in the 5.9 GHz region for use in automotive applications and developed the standard based on the IEEE802.11p physical access layer standard developed for vehicular networks [44]. A similar standard was adapted by the European Telecommunications Standards Institute (ETSI) called ITS-G5, which also operates at the same frequency. The second and more recent standard developed is the Cellular-V2X (C-V2X), which is a new approach built for the advent of 5G-enabled devices. There are two schools of thought in the automotive industry about the best standard for V2X communication; DSRC and C-V2X.

#### 2.3.4 DSRC vs C-V2X

DSRC allows for _direct_ communication (i.e. it does not use any cellular infrastructure) between OBUs and RSUs only. This makes it easy to secure, and very low-latency. When the DSRC protocol was originally developed, the state-of-the-art cellular technology was 3G which could not provide the latency required for high-speed and secure communication between vehicles, as it had to pass via a cellular tower, therefore was not considered an option for this application. Since then, cellular technology has evolved over two radical generations, namely 4G-LTE and 5G. For context, 4G is approximately 500 times faster than 3G, and 5G is purported to be 100 times faster than 4G, with higher peak capacity, larger bandwidth and lower latency [45]. This has allowed the cellular C-V2X standard to emerge as a contender, however, it is a relatively new technology with the first specification released in 2016 and earliest trial only taking place in 2017 [46]. For reference, figure X below gives a conceptual overview of the two system architectures.


**Figure 5: DSRC Vs Cellular Concept [47]**

More recently, the Third Generation Partnership Project (3GPP) 4G Release 14 allowed for direct device-to-device communication. In the context of V2X communication, this meant that cellular networks could be used in the same way that traditional DSRC operates, by jumping between devices _without_ first hitting the cellular tower, for low latency mission-critical vehicle sensor connectivity [48].

A recent study by [44] compares the two V2X systems, showing that in general C-V2X performed better than its older ITS-G5 counterpart. Interestingly however, this study showed that this is only the case when there are less than 150 users per km^2, and after this the performance of the C-V2X system deteriorates faster than the ITS-G5 system, indicating that there is no clear winner. A key performance indicator for V2X system performance is latency, however this study was inconclusive in naming the optimal solution as it is highly dependent on operating range and user density. Similar studies evaluating the two systems were undertaken by [47, 49], the former showing that in 2017 DSRC outperforms C-V2X and the latter contradicting that opinion on 2019, showing a preference for C-V2X.

**DSRC vs C-V2X Stack Comparison**


**Figure 6: DSRC Versus C-V2X Architectures [50]**

In relation to IOTA and the use case for this research, passing vehicle data from the OBD to the IOTA network is not considered a mission-critical application. Both C-V2X and DSRC based systems offer TCP/IP and IPv6 connections which can be used to connect the IOTA network via the On-Board Unit (OBU).

#### 2.3.5 Secure V2V Communication

Securing communications is one of the most important elements in V2X communication. Gaining access to a vehicles OBU allows a malicious actor in the network to gain full control of the vehicle. Once a BSM is received from a remote vehicle, the vehicles must establish that a message has come from another trustworthy certified onboard device. Due to the latency requirements of mission-critical V2X systems (sometimes within 5ms) validating requests using a third-party is not possible. Therefore, pre-validated certificates, called pseudonym or ephemeral certificates are loaded onto these devices and can be used to both quickly validate BSMs as they are received. The leading technology solution to date is the Security Credential Management System (SCMS) developed by security and automotive experts alongside the US Department of Transport in 2016 [51].

SCMS is used to secure communication between devices. Vehicles need to be able to make sure that the BSM is authentic and from another certified on board device. They also need to be able to ensure that the message was not altered during transmission. If a false message was inserted, this could influence applications, cause crashes and a host of other malicious behaviours. Each participating vehicle and infrastructure node that sends and receives BMSs is issued a digital certificate and this is used to create a secure communication channel between devices. All devices sign the BSM digitally and then the receiving vehicle checks the signature before acting on it to make sure it is legitimate.

The requirements for secure V2X communication outlined in [43] are as follows:

- Message Integrity – make sure the message was not changed.
- Message Authenticity – make sure the message is legitimate.
- No PII data gets broadcast to the network.
- No data that allows for long-term tracking/ data mining of our vehicle gets broadcast to the network.
- Certificates can be actively and passively revoked
  - Active is when devices are informed about no longer trustworthy devices
  - Passive means untrustworthy devices no longer can update their credentials

SCMS uses private key infrastructure (PKI) principles and cryptography to manage these issued certificates and maintain the security requirements above. It is designed to partition functionality and distribute it among the system components, separated organizationally to avoid insider attacks. This organizational separation prevents a single organization in the SCMS from linking certificates to specific devices. An exhaustive description of SCMS can be found in [51].

However, SCMS, like many of the components of V2X technology, is a relatively new and unproven system at scale.

Tesei _et al._ [52] proposed a DLT-based vehicle public key infrastructure based on the current SCMS for V2X communication. The goal of this research was to use IOTA as a DLT implementation to eliminate the single point of failure and scalability issues that exists in the form of Certificate Authority (CA). SCMS was designed to obfuscate data in such a way that no one organisation can link a certificate to a specific vehicle, which proves cumbersome in practice. IOTA implementation offers Masked Authenticated Message (MAM) channels that nodes can use to communicate anonymously. Each channel has three modes – Public, Private and Restricted. The Restricted channel is protected by a key, which the channel owner can use to authorise channel subscribers. When a new vehicle is added to the network, it negotiates a symmetric key with the CA and instantiates a secure communication channel where certificates can be registered and updated. Once registered, the CA records a hash of the issued certificate and sends the link to the vehicle, which can be used to sign messages so other vehicles can validate it on the IOTA ledger as proof that the certificate was issued.

A follow-on study on certificate revocation using IOTA was presented in [53]. This research was focused on replicating the Resolution Authority (RA) and Misbehaviour Authority (MA) elements of the SCMS using IOTA framework. The RA validates and processes requests from devices and the MA processes misbehaviour reports to identify misbehaving or malfunctioning devices, revokes access and adds them to a Certificate Revocation Link (CRL). Once a vehicle is found to be compromised by the MA, this information is published on the IOTA Tangle ledger using a zero-value transaction. This solution managed to reduce the vulnerability window (i.e. time between compromised device and certificate revocation) down to 18.57 second. This is markedly lower than the vulnerability window in the current SCMS standards, which can take up to three months to revoke a certificate.

#### 2.3.6 Current Issues &amp; Limitations – (Expand on this)

- Centralised
- Lack of standard to work with
- 5G is a new technology
- The cost of securing edge devices, maintaining PKI is slow and inefficient
- The security risks of communication via edge devices

The convoluted, inefficient and centralized structure of the SCMS PKI highlights the needs for an alternative decentralized and trustless network to manage message integrity, authenticity and anonymity for V2X communications.

### 2.4 Use Case – (Need to Finish)

It is estimated that 1.3 million people die each year as a result of road traffic crashes which is the leading cause of death for children and young adults aged between 5-29 years [54]. Over 90% of these incidents occur in low- to middle-income countries. There are many factors that influence levels of road fatalities, most notably driving under the influence, speeding, distraction as well as inadequacies in road infrastructure, vehicle condition, post-crash care and law enforcement. As am example, in the United States alone, there are over 150,000 accidents with over 1,800 deaths every year due to icy road conditions [[link](https://www.thezebra.com/resources/research/winter-driving-statistics/)] (bad reference).

Electronic Stability Control (ESC) or Traction Control (TC) as it is better known is a safety feature which was first brought to the automotive market in the early 1990s and is incorporated into the majority of vehicles on the market today. Traction control works by sensing when a vehicle is about to lose control by comparing the expected versus actual wheel behaviour, and intervenes accordingly to stabilise the vehicle.

There have been multiple studies undertaken to find a way to intelligently detect adverse road conditions.

## References

[1] ABIResearch. &quot;ABI Research Forecasts 8 Million Vehicles to Ship with SAE Level 3, 4 and 5 Autonomous Technology in 2025.&quot; [https://www.abiresearch.com/press/abi-research-forecasts-8-million-vehicles-ship-sae-level-3-4-and-5-autonomous-technology-2025/](https://www.abiresearch.com/press/abi-research-forecasts-8-million-vehicles-ship-sae-level-3-4-and-5-autonomous-technology-2025/) (accessed October 31, 2020, 2020).

[2] _Taxonomy and Definitions for Terms Related to Driving Automation Systems for On-Road Motor Vehicles_, S. International, 2021. [Online]. Available: [https://www.sae.org/standards/content/j3016\_202104/](https://www.sae.org/standards/content/j3016_202104/)

[3] A. Alnasser, H. Sun, and J. Jiang, &quot;Cyber security challenges and solutions for V2X communications: A survey,&quot; _Computer Networks,_ vol. 151, pp. 52-67, 2019-03-01 2019, doi: 10.1016/j.comnet.2018.12.018.

[4] A. Moubayed and A. Shami, &quot;Softwarization, Virtualization, &amp; Machine Learning For Intelligent &amp; Effective V2X Communications,&quot; _IEEE Intelligent Transportation Systems Magazine,_ pp. 0-0, 2020-01-01 2020, doi: 10.1109/mits.2020.3014124.

[5] NHTSA. &quot;Automated Vehicles for Safety.&quot; NHTSA. [https://www.nhtsa.gov/technology-innovation/automated-vehicles-safety/](https://www.nhtsa.gov/technology-innovation/automated-vehicles-safety/) (accessed 19th Oct, 2021).

[6] I. Foundation. &quot;What is IOTA.&quot; The IOTA Foundation. [https://www.iota.org/get-started/what-is-iota](https://www.iota.org/get-started/what-is-iota) (accessed October 19th  2021).

[7] R. Zhang, R. Xue, and L. Liu, &quot;Security and Privacy on Blockchain,&quot; _ACM Computing Surveys,_ vol. 52, no. 3, pp. 1-34, 2019-07-27 2019, doi: 10.1145/3316481.

[8] Interestingengineering.com. &quot;IOTA : A Cryptocurrency With Infinite Scalability And No Fees.&quot; [https://interestingengineering.com/iota-a-cryptocurrency-with-infinite-scalability-and-no-fees](https://interestingengineering.com/iota-a-cryptocurrency-with-infinite-scalability-and-no-fees) (accessed October 19th, 2021).

[9] K. Abboud, H. A. Omar, and W. Zhuang, &quot;Interworking of DSRC and Cellular Network Technologies for V2X Communications: A Survey,&quot; _IEEE Transactions on Vehicular Technology,_ vol. 65, no. 12, pp. 9457-9470, 2016-12-01 2016, doi: 10.1109/tvt.2016.2591558.

[10] R. F. Atallah, M. J. Khabbaz, and C. M. Assi, &quot;Vehicular networking: A survey on spectrum access technologies and persisting challenges,&quot; _Vehicular Communications,_ vol. 2, no. 3, pp. 125-149, 2015-07-01 2015, doi: 10.1016/j.vehcom.2015.03.005.

[11] L. Badea and M. C. Mungiu-Pupazan, &quot;The Economic and Environmental Impact of Bitcoin,&quot; _IEEE Access,_ vol. 9, pp. 48091-48104, 2021-01-01 2021, doi: 10.1109/access.2021.3068636.

[12] A. A. Sori, M. Golsorkhtabaramiri, and A. M. Rahmani, &quot;Cryptocurrency Grade of Green; IOTA Energy Consumption Modeling and Measurement,&quot; in _2020 IEEE Green Technologies Conference(GreenTech)_, 2020-04-01 2020: IEEE, doi: 10.1109/greentech46478.2020.9289803.

[13] T. I. Foundation. &quot;IOTA 2.0: Details on Current Status and Next Steps.&quot; [https://blog.iota.org/iota-2-0-details-on-current-status-and-outlook/](https://blog.iota.org/iota-2-0-details-on-current-status-and-outlook/) (accessed.

[14] T. I. Foundation. &quot;IOTA Smart Contracts Protocol Alpha Release.&quot; The IOTA Foundation. [https://blog.iota.org/iota-smart-contracts-protocol-alpha-release/](https://blog.iota.org/iota-smart-contracts-protocol-alpha-release/) (accessed October 21st 2021).

[15] IBM. &quot;What are smart contracts on blockchain?&quot; IBM. [https://www.ibm.com/topics/smart-contracts](https://www.ibm.com/topics/smart-contracts) (accessed October 21, 2021).

[16] M. Rauchs _et al._, &quot;Distributed Ledger Technology Systems: A Conceptual Framework,&quot; _SSRN Electronic Journal,_ 2018-01-01 2018, doi: 10.2139/ssrn.3230013.

[17] A. Pinna and W. Ruttenberg, &quot;Distributed ledger technologies in

securities post-trading,&quot; ed: European Central Bank, 2016.

[18] L. LAMPORT, R. SHOSTAK, and M. PEASE, &quot;The Byzantine Generals Problem,&quot; _ACM Transactions on Programming Languages and System,_ vol. 4, pp. 382-401, 1982.

[19] S. Nakamoto, &quot;Bitcoin: A Peer-to-Peer Electronic Cash System,&quot; 2008,

[20] V. Buterin. &quot;A Next-Generation Smart Contract and Decentralized Application Platform.&quot; [https://ethereum.org/en/whitepaper/](https://ethereum.org/en/whitepaper/) (accessed Nov 20th, 2021).

[21] Rathee, Sharma, Iqbal, Aloqaily, Jaglan, and Kumar, &quot;A Blockchain Framework for Securing Connected and Autonomous Vehicles,&quot; _Sensors,_ vol. 19, no. 14, p. 3165, 2019-07-18 2019, doi: 10.3390/s19143165.

[22] M. Pustisek, A. Kos, and U. Sedlar, &quot;Blockchain Based Autonomous Selection of Electric Vehicle Charging Station,&quot; in _2016 International Conference on Identification, Information and Knowledge in the Internet of Things (IIKI)_, 2016-10-01 2016: IEEE, doi: 10.1109/iiki.2016.60.

[23] W. Khan, &quot;Blockchain-Based Peer-to-Peer Energy Trading and Charging Payment System for Electric Vehicles,&quot; _Sustainability 2021,_ 2021.

[24] R. Gupta, S. Tanwar, N. Kumar, and S. Tyagi, &quot;Blockchain-based security attack resilience schemes for autonomous vehicles in industry 4.0: A systematic review,&quot; _Computers &amp; Electrical Engineering,_ vol. 86, p. 106717, 2020-09-01 2020, doi: 10.1016/j.compeleceng.2020.106717.

[25] T. Review. &quot;Many Cars Have a Hundred Million Lines of Code.&quot; [https://www.technologyreview.com./2012/12/03/181350/many-cars-have-a-hundred-million-lines-of-code/](https://www.technologyreview.com./2012/12/03/181350/many-cars-have-a-hundred-million-lines-of-code/) (accessed.

[26] M. Baza, M. Nabil, N. Lasla, K. Fidan, M. Mahmoud, and M. Abdallah, &quot;Blockchain-based Firmware Update Scheme Tailored for Autonomous Vehicles,&quot; in _2019 IEEE Wireless Communications and Networking Conference (WCNC)_, 2019-04-01 2019: IEEE, doi: 10.1109/wcnc.2019.8885769.

[27] S. Popov, &quot;The Tangle,&quot; Berlin, 2018. [Online]. Available: [http://www.descryptions.com/Iota.pdf](http://www.descryptions.com/Iota.pdf)

[28] Nonymous. &quot;Blockchain-Based Peer-to-Peer Energy Trading and Charging Payment System for Electric Vehicles.&quot; [https://github.com/noneymous/iota-consensus-presentation](https://github.com/noneymous/iota-consensus-presentation) (accessed Nov 30th, 2021).

[29] S. Popov and W. J. Buchanan, &quot;FPC-BI: Fast Probabilistic Consensus within

Byzantine Infrastructures,&quot; _Journal of Parallel and Distributed Computing,_ vol. 147, 2019.

[30] thetangle.org. &quot;Public IOTA nodes.&quot; [https://thetangle.org/nodes](https://thetangle.org/nodes) (accessed November 22, 2021).

[31] T. I. Foundation. &quot;Explaining the IOTA Congestion Control Algorithm.&quot; [https://blog.iota.org/explaining-the-iota-congestion-control-algorithm/](https://blog.iota.org/explaining-the-iota-congestion-control-algorithm/) (accessed December 1, 2021).

[32] H. Hellani, L. Sliman, A. E. Samhat, and E. Exposito, &quot;Computing Resource Allocation Scheme for DAG-Based IOTA Nodes,&quot; _Sensors,_ vol. 21, no. 14, p. 4703, 2021-07-09 2021, doi: 10.3390/s21144703.

[33] I. Korotkyi and S. Sachov, &quot;Hardware Accelerators for IOTA Cryptocurrency,&quot; in _2019 IEEE 39th International Conference on Electronics and Nanotechnology (ELNANO)_, 2019-04-01 2019: IEEE, doi: 10.1109/elnano.2019.8783449.

[34] S. S. Hazari and Q. H. Mahmoud, &quot;A Parallel Proof of Work to Improve Transaction Speed and Scalability in Blockchain Systems,&quot; in _2019 IEEE 9th Annual Computing and Communication Workshop and Conference (CCWC)_, 2019-01-01 2019: IEEE, doi: 10.1109/ccwc.2019.8666535.

[35] T. I. Foundation. &quot;Final Alpha Release for IOTA Streams.&quot; [https://blog.iota.org/final-alpha-release-for-iota-streams-5a4cfeca506c/](https://blog.iota.org/final-alpha-release-for-iota-streams-5a4cfeca506c/) (accessed December 3, 2021).

[36] O. Lamtzidis and J. Gialelis, &quot;An IOTA Based Distributed Sensor Node System,&quot; in _2018 IEEE Globecom Workshops (GC Wkshps)_, 2018-12-01 2018: IEEE, doi: 10.1109/glocomw.2018.8644153.

[37] D. Strugar, R. Hussain, M. Mazzara, V. Rivera, J. Young Lee, and R. Mustafin, &quot;On M2M Micropayments: A Case Study of Electric Autonomous Vehicles,&quot; in _2018 IEEE International Conference on Internet of Things (iThings) and IEEE Green Computing and Communications (GreenCom) and IEEE Cyber, Physical and Social Computing (CPSCom) and IEEE Smart Data (SmartData)_, 2018-07-01 2018: IEEE, doi: 10.1109/cybermatics\_2018.2018.00283.

[38] P. C. Bartolomeu, E. Vieira, and J. Ferreira, &quot;IOTA Feasibility and Perspectives for Enabling Vehicular Applications,&quot; in _2018 IEEE Globecom Workshops (GC Wkshps)_, 2018-12-01 2018: IEEE, doi: 10.1109/glocomw.2018.8644201.

[39] J. L. Rover. &quot;ON THE MONEY: EARN AS YOU DRIVE WITH JAGUAR LAND ROVER.&quot; [https://www.jaguarlandrover.com/news/2019/04/money-earn-you-drive-jaguar-land-rover](https://www.jaguarlandrover.com/news/2019/04/money-earn-you-drive-jaguar-land-rover) (accessed October 19th, 2021).

[40] Elaad. &quot;IOTA Charging Station.&quot; [https://www.elaad.nl/projects/iota-charging-station/](https://www.elaad.nl/projects/iota-charging-station/) (accessed.

[41] S. K. Pinjala and K. M. Sivalingam, &quot;DCACI: A Decentralized Lightweight Capability Based Access Control Framework using IOTA for Internet of Things,&quot; in _2019 IEEE 5th World Forum on Internet of Things (WF-IoT)_, 2019-04-01 2019: IEEE, doi: 10.1109/wf-iot.2019.8767356.

[42] R. Nakanishi, Y. Zhang, M. Sasabe, and S. Kasahara, &quot;IOTA-Based Access Control Framework for the Internet of Things,&quot; in _2020 2nd Conference on Blockchain Research &amp; Applications for Innovative Networks and Services (BRAINS)_, 2020-09-01 2020: IEEE, doi: 10.1109/brains49436.2020.9223293.

[43] R. Miucic, _Connected Vehicles: Intelligent Transport Systems_. Detroit: Springer, 2019.

[44] V. Mannoni, V. Berg, S. Sesia, and E. Perraud, &quot;A Comparison of the V2X Communication Systems: ITS-G5 and C-V2X,&quot; in _2019 IEEE 89th Vehicular Technology Conference (VTC2019-Spring)_, 2019-04-01 2019: IEEE, doi: 10.1109/vtcspring.2019.8746562.

[45] Verizon. &quot;What is the difference between 3G, 4G and 5G?&quot; [https://www.verizon.com/about/our-company/5g/difference-between-3g-4g-5g](https://www.verizon.com/about/our-company/5g/difference-between-3g-4g-5g) (accessed November 25, 2021).

[46] Continental. &quot;Continental Invests in Cellular-V2X Technology and Announces C-V2X Trials.&quot; [https://www.continental.com/en/press/press-releases/continental-invests-in-cellular-v2x-technology-and-announces-c-v2x-trials/](https://www.continental.com/en/press/press-releases/continental-invests-in-cellular-v2x-technology-and-announces-c-v2x-trials/) (accessed.

[47] Z. Xu, X. Li, X. Zhao, M. H. Zhang, and Z. Wang, &quot;DSRC versus 4G-LTE for Connected Vehicle Applications: A Study on Field Experiments of Vehicular Communication Performance,&quot; _Journal of Advanced Transportation,_ vol. 2017, pp. 1-10, 2017-01-01 2017, doi: 10.1155/2017/2750452.

[48] L. Miao, J. J. Virtusio, and K.-L. Hua, &quot;PC5-Based Cellular-V2X Evolution and Deployment,&quot; _Sensors,_ vol. 21, no. 3, p. 843, 2021-01-27 2021, doi: 10.3390/s21030843.

[49] R. Sattiraju , D. Wang, A. Weinand, and H. D. Schotten, &quot;Link Level Performance Comparison of C-V2X and

ITS-G5 for Vehicular Channel Models,&quot; _Wireless Communication &amp; Navigation,_ 2020.

[50] Qualcomm, &quot;ITS Stack,&quot; 2020. [Online]. Available: [https://www.qualcomm.com/media/documents/files/c-v2x-its-stack.pdf](https://www.qualcomm.com/media/documents/files/c-v2x-its-stack.pdf)

[51] (2016). _Security Credential Management System_

_Proof–of–Concept Implementation_. [Online] Available: [https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/2896/2019/04/SCMS\_POC\_EE\_Requirements.pdf](https://pronto-core-cdn.prontomarketing.com/2/wp-content/uploads/sites/2896/2019/04/SCMS_POC_EE_Requirements.pdf)

[52] A. Tesei, L. Di Mauro, M. Falcitelli, S. Noto, and P. Pagano, &quot;IOTA-VPKI: A DLT-Based and Resource Efficient Vehicular Public Key Infrastructure,&quot; in _2018 IEEE 88th Vehicular Technology Conference (VTC-Fall)_, 2018-08-01 2018: IEEE, doi: 10.1109/vtcfall.2018.8690769.

[53] A. Tesei, D. Lattuca, P. Pagano, M. Luise, J. Ferreira, and P. C. Bartolomeu, &quot;A Transparent Distributed Ledger-based Certificate Revocation Scheme for

VANETs,&quot; 2020-10-23T15:12:07 2020.

[54] W. H. Organization. &quot;Road traffic injuries.&quot; [https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries](https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries) (accessed December 3, 2021).