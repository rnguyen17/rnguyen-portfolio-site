import React from 'react';

export const Speedometer = ({ size, color, props }) => (
  <svg width={size} height={size} viewBox="0 0 950.002 950.002" fill={color} {...props}>
    <path d="M949.869 741.307l-.217-6.221c-.075-2.082-.152-4.17-.229-6.268l-.06-1.57-.03-.787-.008-.197-.02-1.76-.006-.082-.025-.326-.201-2.607-.813-10.467-.207-2.645-.312-3.43-.646-6.836-.669-6.799-.343-3.381-.414-3.119c-1.139-8.242-2.156-16.342-3.608-24.129-.686-3.896-1.319-7.727-2.031-11.461l-2.277-10.914c-1.402-7.098-3.163-13.727-4.647-19.855l-1.115-4.492-1.185-4.264c-.782-2.766-1.523-5.391-2.221-7.855-.71-2.461-1.336-4.771-1.99-6.889l-1.851-5.803-2.079-6.455a4.926 4.926 0 00-6.043-3.223l-160.613 45.771a4.924 4.924 0 00-3.498 5.637l.595 3.201.759 3.994c.261 1.457.466 3.053.729 4.74l.821 5.383c.141.947.308 1.912.439 2.91l.35 3.07c.447 4.184 1.115 8.67 1.413 13.48l.609 7.361c.156 2.518.234 5.098.368 7.709.348 5.213.282 10.641.382 16.115l.023 2.039-.072 1.805-.124 3.617-.098 3.619-.038 1.807-.11 2.602c-.148 3.502-.299 7.002-.448 10.49l-.111 2.613-.015.326-.003.08c.002.393-.03-3.111-.02-1.598l-.013.129-.048.516-.095 1.031-.371 4.102-.355 4.062c-.16 1.342-.319 2.678-.479 4.004-.341 2.65-.551 5.275-.973 7.832l-1.09 7.535-1.246 7.166c-.366 2.33-.856 4.574-1.292 6.746-.456 2.168-.819 4.273-1.292 6.271a10470.159 10470.159 0 01-1.93 8.355l-.588 2.125-.327 1.221H944.3c2.633 0 4.826-2.066 4.926-4.697l.002-.047.503-11.254.224-11.742c.112-3.982-.009-8.029-.02-12.121-.023-2.045-.044-4.102-.066-6.17zM898.791 535.129a4.927 4.927 0 002.622-6.68l-1.886-3.984a3091.82 3091.82 0 01-2.231-4.697l-3.396-6.916c-1.222-2.459-2.521-5.076-3.893-7.834-.695-1.434-1.378-2.617-2.093-3.963l-2.186-4.037c-1.497-2.744-3.028-5.613-4.671-8.551a30131.59 30131.59 0 01-5.254-9.002l-2.749-4.684-2.947-4.723-6.112-9.706c-4.377-6.45-8.734-13.196-13.597-19.761-1.194-1.653-2.395-3.312-3.598-4.976l-1.81-2.494-1.884-2.453-7.58-9.812c-2.575-3.237-5.239-6.406-7.85-9.587-1.32-1.58-2.599-3.183-3.946-4.727l-4.04-4.603c-1.343-1.523-2.68-3.043-4.011-4.554a134.141 134.141 0 00-4.033-4.45l-8.06-8.585c-2.65-2.81-5.394-5.451-8.005-8.091-2.63-2.626-5.186-5.205-7.796-7.6l-7.521-7.04c-2.418-2.279-4.887-4.349-7.187-6.399l-6.656-5.819-6.157-5.073-5.416-4.442c-1.676-1.367-3.279-2.552-4.692-3.657a32101.34 32101.34 0 01-5.177-3.973 4.925 4.925 0 00-6.798.776l-86.204 104.346a4.925 4.925 0 00.327 6.64c.721.712 1.553 1.536 2.489 2.463.897.901 1.925 1.855 2.979 2.969l3.409 3.604 3.88 4.078 4.147 4.67c1.427 1.642 2.987 3.272 4.471 5.09l4.636 5.573c1.621 1.878 3.168 3.917 4.77 5.977 1.585 2.074 3.279 4.119 4.871 6.312l4.851 6.658a71.25 71.25 0 012.41 3.434l2.381 3.506c.798 1.168 1.601 2.342 2.404 3.52.802 1.178 1.537 2.41 2.312 3.615 1.522 2.432 3.1 4.828 4.596 7.277l4.369 7.41 1.09 1.838 1.021 1.877 2.038 3.727c2.795 4.889 5.154 9.93 7.623 14.666l3.329 7.152 1.614 3.453 1.459 3.43c.965 2.246 1.903 4.434 2.812 6.547l2.427 6.199 1.142 2.912c.352.926.788 1.928 1.022 2.699l1.574 4.6 1.413 4.016 1.574 4.697 1.395 4.184a4.927 4.927 0 006.515 3.008l149.464-60.05zM459.808 348.748l4.324.59 5.063.882 5.747.987c1.758.292 3.579.716 5.472 1.112l54.404-111.282-7.993-1.248c-1.796-.267-3.564-.574-5.325-.794l-5.218-.632-9.989-1.187-9.358-.802c-3-.23-5.861-.533-8.6-.663l-7.765-.382-6.818-.322-5.792-.093-6.222-.075a4.925 4.925 0 00-4.979 4.695l-4.961 103.577a4.926 4.926 0 004.25 5.121l3.76.516zM606.027 405.781c1.462 1.063 2.848 2.071 4.15 3.02l3.654 2.617c.489.336 1.296.948 1.955 1.438l1.939 1.448 3.533 2.636a4.925 4.925 0 007.065-1.25l71.03-108.196a4.923 4.923 0 00-1.661-6.98l-3.823-2.193-2.101-1.205-2.511-1.421-6.542-3.604c-2.336-1.273-4.823-2.627-7.443-4.056a39845.12 39845.12 0 01-7.86-3.939c-2.75-1.342-5.556-2.835-8.565-4.19l-9.273-4.25c-3.161-1.492-6.497-2.847-9.883-4.269-3.4-1.392-6.821-2.914-10.394-4.257l-2.736-1.036-30.642 132.998c1.694 1.064 3.29 2.192 4.862 3.21l5.246 3.479zM364.434 348.206c1.372-.181 2.719-.405 4.064-.547l3.984-.405 7.619-.791 7.142-.479 3.353-.229c1.09-.073 2.182-.166 3.118-.167l5.479-.143 4.8-.152 5.025-.033 4.408-.024a4.925 4.925 0 004.886-5.254l-6.394-97.57a4.925 4.925 0 00-5.53-4.571l-4.373.552-5.089.648-7.083 1.05-8.034 1.224c-1.448.204-2.781.475-4.18.739l-4.279.817-9.076 1.754-9.642 2.196-5.019 1.154c-1.692.396-3.389.88-5.11 1.325l-10.51 2.8-10.757 3.243c-1.812.561-3.643 1.09-5.463 1.689l-5.467 1.865-5.5 1.885c-1.84.626-3.683 1.255-5.501 1.972l-10.963 4.185c-3.643 1.426-7.226 3.006-10.817 4.501-1.79.763-3.585 1.499-5.354 2.282l-5.253 2.425-5.201 2.409c-1.725.798-3.443 1.584-5.113 2.451l-9.919 5.008c-3.257 1.633-6.361 3.435-9.444 5.094-3.069 1.69-6.087 3.302-8.934 5.039l-8.342 4.949c-2.702 1.576-5.208 3.278-7.664 4.816l-6.999 4.487-6.178 4.24-5.418 3.731c-1.672 1.153-3.151 2.296-4.514 3.284l-4.7 3.47a4.923 4.923 0 00-1.141 6.735l40.515 59.566a4.922 4.922 0 006.494 1.524l3.632-2.049c1.209-.669 2.517-1.459 3.994-2.228 1.476-.77 3.072-1.6 4.777-2.488l5.417-2.832 6.107-2.928c2.138-.996 4.307-2.137 6.646-3.132l7.189-3.155c2.443-1.125 5.031-2.108 7.649-3.158 2.632-1.02 5.268-2.174 8.029-3.149l8.374-3.018c1.403-.533 2.847-.984 4.294-1.446l4.353-1.401 4.378-1.416c1.472-.447 2.965-.847 4.448-1.275 2.979-.824 5.938-1.738 8.938-2.504l8.994-2.225c1.484-.395 2.99-.704 4.489-1.013l4.475-.942 4.429-.94c1.473-.294 2.954-.521 4.415-.784l8.648-1.501 8.399-1.16zM88.175 425.22l-3.199 4.526-3.216 4.559c-1.071 1.527-2.073 3.111-3.115 4.669-2.054 3.137-4.156 6.25-6.168 9.422l-5.887 9.585-1.46 2.386-1.386 2.425-2.754 4.822c-3.74 6.353-6.989 12.847-10.291 19.015l-4.529 9.266-2.178 4.488-1.999 4.441-3.817 8.504-3.329 8.045c-1.046 2.586-2.103 5.033-3.004 7.408l-2.527 6.752-2.212 5.93-1.734 5.084-1.741 5.168a4.924 4.924 0 002.91 6.172l37.71 14.457c2.4.92 5.103-.154 6.212-2.473l1.962-4.102 2.073-4.311 2.596-5.004c.924-1.781 1.906-3.68 2.942-5.68 1.044-1.994 2.246-4.039 3.439-6.199l3.77-6.705 4.252-7.043 2.21-3.668c.785-1.215 1.58-2.443 2.383-3.688l4.916-7.59c3.546-5.02 7.014-10.307 10.933-15.406l2.882-3.879 1.445-1.947 1.514-1.904 6.064-7.633c2.061-2.516 4.2-4.967 6.279-7.439 1.054-1.227 2.066-2.479 3.145-3.672l3.228-3.562 3.195-3.531a87.627 87.627 0 013.211-3.444l6.411-6.64c2.101-2.177 4.294-4.197 6.364-6.239 2.086-2.027 4.104-4.027 6.182-5.86l5.956-5.42c1.908-1.761 3.874-3.333 5.69-4.911l5.246-4.468c1.636-1.295 3.188-2.523 4.646-3.679a8833.53 8833.53 0 004.062-3.235c.576-.476 1.356-1.046 2.015-1.547l1.933-1.458 3.518-2.655a4.925 4.925 0 00.774-7.133l-42.935-50.299a4.925 4.925 0 00-7.166-.355l-3.174 3.058-1.744 1.679c-.621.603-1.212 1.152-1.982 1.939l-4.764 4.808-5.392 5.47-5.557 6.019c-1.912 2.113-3.974 4.242-5.969 6.576l-6.202 7.19c-2.155 2.438-4.24 5.057-6.385 7.714-2.129 2.671-4.373 5.336-6.514 8.16-2.135 2.824-4.305 5.695-6.501 8.603a110.88 110.88 0 00-3.237 4.439zM10.155 601.572l-.878 4.32a37820.5 37820.5 0 01-1.011 4.977c-.361 1.852-.714 4.039-1.108 6.271l-1.234 7.18c-.21 1.26-.45 2.562-.649 3.875l-.542 4c-.704 5.453-1.631 11.32-2.165 17.588l-.953 9.609c-.268 3.283-.447 6.645-.678 10.053-.54 6.811-.639 13.875-.864 21.021L0 693.152l.013 2.697a220415.294 220415.294 0 01.062 10.842l.017 2.717.104 2.719.441 10.84.111 2.695.034.873.048.65.096 1.299.382 5.18.379 5.139.516 5.309.516 5.24.258 2.588.32 2.529 1.255 9.871 1.449 9.412c.44 3.057 1.007 6.014 1.528 8.873l.128.682a4.927 4.927 0 004.846 4.031h13.291a4.931 4.931 0 004.923-5.221c-.045-.756-.091-1.52-.142-2.291-.166-2.756-.366-5.598-.43-8.531l-.295-9.01a40192.024 40192.024 0 01-.072-11.804l.053-2.385.106-4.812.107-4.865.24-5.146.241-5.188.061-1.303.03-.652.004-.082c0-.207.004.191.006.123l.012-.158.025-.314.202-2.523.807-10.117.206-2.527.291-2.521.58-5.027.575-5.002.285-2.488.369-2.471c1.012-6.57 1.872-13.033 3.132-19.221.591-3.1 1.12-6.15 1.727-9.119l1.936-8.666c1.164-5.641 2.673-10.885 3.901-15.746l.924-3.562c.318-1.143.661-2.225.977-3.297l1.81-6.059c.581-1.918 1.058-3.633 1.614-5.354l1.601-4.82 1.389-4.186a4.925 4.925 0 00-3.412-6.311l-33.319-8.885a4.925 4.925 0 00-6.103 3.775zM387.317 774.27c10.84 5.299 22.323 7.811 33.628 7.811 28.378 0 55.65-15.811 68.953-43.023 2.562-5.238 4.545-11.021 5.835-16.467l77.577-336.717 29.544-128.233 18.303-79.437c2.13-9.245-5.224-15.543-12.602-15.543-4.319 0-8.647 2.159-11.087 7.148l-37.245 76.183-54.944 112.386-153.175 313.311c-18.603 38.051-2.837 83.979 35.213 102.581zm36.472-108.434c20.759 0 37.588 16.828 37.588 37.588 0 20.758-16.829 37.588-37.588 37.588s-37.588-16.83-37.588-37.588c0-20.762 16.829-37.588 37.588-37.588z" />
  </svg>
);