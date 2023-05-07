import React from "react";
import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import ButtonLink from "./ButtonLink";

const Bg = styled.div`
	background-color: #222;
	color: #fff;
	padding: 50px 0px;
`;
const Title = styled.h1`
	margin: 0px;
	font-weight: normal;
	font-size: 3rem;
`;

const Desc = styled.p`
	color: #aaa;
	// font-size: 0.8rem;
`;

const ColWrapper = styled.div`
	display: grid;
	grid-template-columns: 1.1fr 0.9fr;
	gap: 40px;
	img {
		max-width: 100%;
	}
`;

const Colums = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
`;

const BtnWrapper = styled.div`
	display: flex;
	gap: 20px;
`;

const Featured = ({ product }) => {
	console.log(product);
	return (
		<Bg>
			<Center>
				<ColWrapper>
					<Colums>
						<div>
							<Title>{product?.name}</Title>
							<Desc>{product?.description}</Desc>
							<BtnWrapper>
								<ButtonLink
									href={`/products/${product?._id}`}
									white={1}
									outline={1}
									size="l"
								>
									Read More
								</ButtonLink>
								<Button primary size="l">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
										/>
									</svg>
									Add to cart
								</Button>
							</BtnWrapper>
						</div>
					</Colums>
					<Colums>
						<img
							src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVEhIYFRUYGBgYGBIYGBgYERIYGBgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGhISHzQhJCE0NjQxNDQ0NDQ0NDQ0NTQ0NDQ0NDQ0NDE0NDQ0NDQ0MTQ0NDQxNDQ0NDQ0NDQ0NDQxNP/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYABwj/xABEEAACAQIEAwUFBQYEAwkAAAABAgADEQQSITEFQVEGInGBkRMyYaGxQlKSwdEUFSMzYnJTgtLwRcLhB0NVY4OTorKz/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACoRAAICAgEDAwMEAwAAAAAAAAABAhEDIRIEMVEFQWEycaETIrHwQoHR/9oADAMBAAIRAxEAPwCxtOUQiidlnlHolRjE185CxCd6WnEElXjPsmdD3FMxWm0BYgGSE8ZCqbiSFXSR2KJaeMm8IqWciVa6SVww/wATxmsJbM5rRqUe4tLfhFbS3SUtNdZYcLNntOmJzM1dBtJB4ue4ZLoDSRuJLdTCtgZ/AiyGMXePwp0IjCLayZLZaejHcWW2KU9by5xK3TymaxeLrYh1rUcI7J9h89NS45EKWuAdxLBuIYorl/d1Tx9pS/1R8WHF+CsrpoZVBe95y3eji2/4fU1/rpf6pHXhWLvf9gq/jpf6o1FipkSqusqeKiaN+FYz/wAOrfip/wCqZ7jlT2ThMRh6tJ8obKStypJAOhPMH0jSYdikYbzRdnh3JRpWpEgBKhLGwAK3JOgG02WA4DjKYsvDcQfNP1g4sLIGKezw2Ar2vJWI4BjXN/3ZiPVP1g17PY8bcMxH4kkODstSSVETE40Am5lTicUp2MuqvZTGt73DcSf89MflAp2KxY1/dmIP/qp+kf6a9w/UfsRcPxFAoBMG/EUNwDJ79isWf+FYj/3U/SBxPZeth0apW4diKdNdXcVEbIOpW23p4iPgieTM3jDdiYCjhWc2RbmT+KYTI+UNmBCujDTOjqHQ25XDDSWXZmstBz7Rd9pcnUdExVvZWYfAOjfxFKwjuAZq+KZay5xoJlcfRCnQ3kJctsputIYnECrBgL2guIYz2l2ItAlCdhI1ZtLRpIluzadlOxjYimtcVWRr3FrfmJ6xgsNkRVJuQN+sq+weBtgkHPKPpJOMp1F91oySzCDpHezmVr8QrpzkB+0lcG1xFYqLZYRVjbQiGeVZ6ZCx9PSU+JF08JocYl1lHVXRhN4u4mT+ornXSSaKaQIGkm4RbiSygDCHwWlRZzpGUTZ1Pxjg/wByJmtGzROcPw/34Og11HhC4TuvO+KOKRpaT6RMQMwMbhn0hXtaAIy9NcrsItRN4SqP4hjnMKBM8u4PjKiUkRajgKMoAY2AUkW+UtU4jVH/AHj+sosGbBh0qVV9KjCWFN566xpwi69kfSYFCWOOl2RocBxV8wLMTY6jcEc7TTh+k8+ptaafhHEQ4CNowFlPJrcvgbTknhcW2uxx9d0zpSgu3cv0qnrI2N4Rhq7B6+HpVXAyhnRWYKCSBcja5PrFVoUPMmjyqbIVDs1gQwYYOgCpBBFNAQRqCNJokboZWo8N7cjQGQ0Wov2J3traX+k52B7zAHLexIBIuLG3jIaPEr1eUEaKA4VTqdBcAHurqBsNuUDicaVF2sdwBZbm+4220F4MvKfFV87X5DQeE0SOjFhUnvsSn4rVJvmUf5VPzIlH2x4rUGCxGZhZqZU2VQTnZVtcD+oScDM527N8G683emo8S4P/ACypJKLOjLihGDdLszJYjhb1KgC/YpYdPNaFMH53gsTwqoGFxryls/ETRr1NLgubeEc/GQzKQNOcwR4rGPQanh+8N5SJg/aa3tLntDxTOgRfOVq3CALvNscItttdgjb7ga2CyLbSZ50zOF6sB6m00Tu2U5jrKng9LPiaa9XHy1/KROMVtKiqR9FdmcNkwyD+kRtZwzlLbSXh3ZKKBVvoPpM/W4iEdy6kX5zMzYbEcOVt5Xv2cQm95MTj9A6F7eMOOK0P8QesKTC2ViiPURFj1E8c9QRxdTKOuliZoANJTYtLNN8O00Zz00ynA3El4J5GrEByCbRaNRQfeg0wtEupvGsO7ec2JTrBVMWljrHGDsTkjYcPe6KYdzYgyBwCoHpAiWDid8TikXGAq3Emu+kpcATLJnMpolMqn98mMZotYWeDI1hQ0zyZ3tUqjpXrf/qx/OSqGIB+Eh8W7uIxA/8AOc+tm/OMR59L0+JSwRvwj3emn+yK+C+R4ZXINwbHrKajiCPjLCnXuJE8DTO+Ls2PBOImoCrnvqL35sP9/WWd5hcBjvZurjkdR94HQj0m0FQEBlNwQCD1B1E83Pg4StdmeV1fTqE+UVp/ySUeNWpreBZ7QavOWSMYwLH2thAe1karV0AgzUk0bRgExWI0sOf05yDeJUqXMaGlxOuEOKDKZnu1qF/2WmPtYulcf0qGLfrL4GVHE1zYnCj7pqP52RR8maE/pZl1TrEyt7Q4Bfa2I0IJmaq8PYuRT2E3nE0vWNxsspqC5WLW0uZycqPIjHkvsYfHs9M2IMJheIlhoNpc8aw4a7nbpM/haeW49Jccso3QcA2JxDEE2h+weHz41NNBc/QSNizZTeaT/s/p5Vzgd65184nlclchSjuj28p3APhMn2nrIi6rcmPo9oKijvAESq4zXOJsfdk80Z8GYbHcRDEi2Xxlaaz8mFvGXnFOzVV9mB8pRP2cxANsvzjuLHTPWFjxBrCCeQeiPlRxNwJZkyp4ul7GbYXTM5rRl+0FJyylCZAo4WodyfWalkDKOohKWGndB0jlktmcGAfqY793MRNO2GjkwkrkTQPs9xL2CZGG0n4ntFb7B9I2jw8HlDnhoO8pSJaAU+1LjamY2p2qrE6IZNocMXpDHha9IWKkUNbjmIb7NoH954g7zSNw9RykdsEoO0LY6R5pj6hNaqW94uCfNFglcjaSe01MJiqgG3cPqglcH6z7DoFfTwfwduPLxikTkxQ5iTcPiVOx/WUl52adksCkjoj1kovezSGpNV2bx+dChPeTUf2n9D9RMBhcVfusdeR6y04Tj/ZVVYnuk5W/tOh/XynB1PSuUGvdbR2yyQzY7X9ZvmqRBUkR6msb7WfOyRlHHolmpc3jHqSOakG1SLiaRgGzRQ0jZo4VJosbNqJYaVbvfGIPu0w34nYf8kmCpM6eIKmNqO5sqUEB6XLEgn8XzizQcY2cXW6xfdl3iagNc+EpMeLa3trBUuKpVxByMMpG8JxhkNkQ3PWee1uzzcclFbKQHO+VtR8ozjYVbBBDVGVWy7MPWRcS4sb974yb2UouS5ELirfwRfebHsjQy0F8BMXxXVUXqwHrPSOE0stJR8Iv8SH9RKqDuxKKQjroBC000kjGlYuWECxr7wEKDCZogpN0jxh3PKcPF+Dq5IGxkXGC6yaaB5kDxldjsXRQEGoGNtl7x+U0hCXJMmUo0QKdidJY0qYtMpSx7IxK6gnS/KLU4lUbd7DoNJ2pUcjdmqasi+8wHnAPxemPdBb5CZYNffWHpmMDQLxVz7oC/MyRTrM27GUlBpZ4doxFxRqEc4Y4phzvIVJ4VmgIe2PI3W8A/El5qRBVjIFaFhRjO1VUNinI2yp9DKkmXHFsG1XGezpgZnRbXNhpm5+UDiezmLS+agxA1upVhbroZ9f6bmgumgpNJ7DlWirzWjle8ZVpOvvoy/3KQPUwIbXSerCSfYhzolq1tZOSpmF5Wo94+nUINxNHDkdODqOD+GbThfFMyhXPeUW/uXkfyk5caOsxdDEagjccpPGKvPKy+nQcnJLue1gzQlE1AxQPOOFYdZmFxcOmNmL9PS7G9xfY0HthGmuJRNjDBviidJUeiHot6uMzaA6fWVFDA/tFXFg7H2K+i3I9bRorS27GrcYhutcr5Kq2+s4fVoLHiil5PO9RkuEV8mbxPZmpSOamx8JGp4ipTfMw1+PPznpzUb8pX4vhKONVE+fs8ijzqvVz1A7d0HQ26S4tQyZQ2pHWSeI9miLmn6cpm8TQZDZ1I+MbSY1KS0mdkzV6aA3Gb6T1LCpZQPCeZ9n6efEr8AT9J6hQEzn4Kj5HumsJe0XLGsNRILCXgc0Iw3kfWAhMX2qor/LUufCy/OVGJ7VVm0TKg+Au3qZnbzs0KQ7JVfFu+ruzeJ09JGYxM0S8aQjiZwMQzhKICqYdDI6mGQxgWFEyfQaVlFpOpNGItKbw2aQKbySgLe6L/T1gKhKjyG6ljYC8mVVRDao12tf2a6tbw3lZiuIue6i+zHS128yDpDuUUnHeEVWqK9N7OF1CuQwIJsRbxMgtxDiFD7dTpcgOLfG2sTiyBzmNmCnQk6jfcXvb08RA08XUQd2o6i1wtyVsL6hW95dzcWHVjOiEpJUmQ6ZOodvMSvddKVTqGBB3vqNYZe1GEdlOI4apAFmyZbsddb6Eb/KQDxNzpURKg6Mi6jmwK2BG+uii255jLYZ98MVvcg03IuPgpt13OmvOarPki7X40JJE2vU4XUcGmKlEZRcEtcNY3tfS17Qi8Dwzpmp45b5rZGXM1smbN3Te2bu7SpbBYZrZK7oTsHQMNrn3NbD723xgzwIsR7OrQqki4swVyBfULqSNDr8J24vVM0Pd/wB+46VUkXNbslXWzI9JwSAMr6ksua1iOkCeFV0XM1FgLA3FmWx2NwdPOVT8PxNP7FVR/SxYHyBP0hKPaLF0tP2hhsQrLYgqQRbYixA9J1w9ZlVS2aY5uD0SXzL7ykeII+sT2sn0u3eIyhKlJKihSosWU2bfxPjz13j6HaTCEMK2EN2tlIAb2dujXLHz6c51Q9WxtbX5/wC0da6orvbTv2j4Szevw2oq5HakxezAsQEQk6jMBcgW+cnUuyeHrWNDiNMEkgJU0IGtiWFr3t05zqj1/TtW7X+r/gcurktLZnfb3mk7JcSoU6H8WoFNSpUcXB1AIUm9uolFxngdTChGd0dXuVKk30P2gRptK8Ailhwf8It+KtVP0tPK9byQnHHwdp3+DmzZpZKv2PVMNjqD+5WRvgHW/peTPZDlPG8t4SliHT3Kjp/azL9DPnKMT1x8JeUnFeBhwe7MbQ7R4pPdxD+DZX/+wMsqPbXEjR1puPihB/8AiR9IcQH8E4OKdZmtraa6gsyi9p1Y3ahlbqrXHoR+cssJ2jpn3wy+Vx8pEosuMlRf3iKNZBp8WottUUeN1+sm4aorXKsreBB+khplWEUbxfZxyi05zrADzXNFvA5p2aVQBSY28ZmnZo0IfeKGg7zrxkhlMMhkZTLHAcNqVdUXu/fbRPXn5XgAtN5aYKiz+4tx97ZR5ydgeCImr99vjog/y8/OWy9Bt0kuXgfEi4bhwGrnMeg0X9TBY8YixWmgVdbZGAYjluBY+EsQYt4kx0Y3F0WXVxuftJlW/iQq+fwMiVV2FrDcje3QgE2tY+Z6zeE3kWtgqR95Be1roSh/Eus1UieJgseGYhRcjb3cqVMupHdHe5cwNJTMALKrC2bRrd7PuM2VSX0GltATvN5xHs5Tqe7UdDbnZ1PxOx+fKZzFdksQlzTqI4IsRcoxHSx0+c2i0JxZSAXJAAAB74DAkHbPcEkvcmw1tOGpN2stsxLWIPvWzgEjProCRba2sfX4fiaQs9Fxa9nAJyDmFYEhddbjX4yL+2aWtrzXTIoAAuqnTORuxH/TRKySQNS1wVy2L31Ze8LFk3fcWBsBpeNCgqb7WBN7FTpoWYHvN0TQaC+xjfaIQASACbjS4pi/2+6M7W0ta1j5QzrkUIwKXN/Zte73BGdj3ci7WFvG4EqgHUazrfI7qb3azsL27uarr3BtZddd76XlpxasAA9nBBIV0Gdhp32st1Qddz9ILr3EClWAYkPYL7R7CyhCRmAvbMQd/I9WQIoUrr79QbozbqMykfe2XQX3PJcUMlnE0WAL4RGJ0DUi1M1GuL5V3sAdydTy6Nq0cJr361LLYHMFdMx+yN2Yj4dJGrKLJmbMXXMTYhwgGiBdgpAvm577bvyMFRr5L3yZdadNR7zZr+/e5tqdeuWJxBkhuCBr5MTRe1rq90Kk7Br3sfhaNbstWAuaYHQq1r/EHSQ3UEIyqCma2Vx36jbszKu4ubaHoNZM4ZgalSr/AA6zi5JepSd1y72vcDe1gB0+EmmuwUBr8MrKO+agUfe7yjzO3rC45cpRPuUqaHxyBmFvFjNtiaq0Uz1GOgsCblna3dHxJPPzmEqA5iW3JJPiTcyck5SpSbdfI3GmDnEx1o0iZCEvHLG2jgIwDIJJWRUMkIYhElTHgwKvCBoASUxtRfdqOPBjb0h/33iP8Q+YBPraVxaMvFSHbBExCYy8S8gsfmnZoMmdeMQTNHB4G8cDGAUNNFhe1yIAlVbWAGZR3dNNht6TNBoFhfcXiaT7hdHpGD4xQq/y6in4X28bbecsFIOoNx1G08hfDKTcd08iNCPAyXheI4mkf4dUsOj6/Pf5yeHgfLyepx+Xrp8OcwmD7buthWpH+5dfPkfrNBge0uGq6CoA33Tv6Gx+UOLRSki5Y+QjCIUUmKq4F1YXVhqCLkfUGMjRSAssE6yS0Ewm0WNEcXGxkbE8PpVP5lJH+JUZvUaycUihJsmiqM+/ZTDXugZG5a51U9crb+cg4zsm7Wy1AdwDmdQLkm7KwYsbnfMJr7RypHaE8cWeecQ4PXFj7JswAVSFOYgX5pdbm9/s2/qJJPUsHSZQExaUmQ2NJwwpLUN9TUIsxOU9RpYXA19FtAYnA03/AJlNH/uUE+phZP6R5vxnAvSYIzJUcjO1TMC7i17dcoC31332ldiHY2LLkAFlC3CKBvlv1OpN9zPRMb2VoOWYZ0ZjclTe58GBt5W6QK8HxFEFMM9J6VtKVRALvbV2YDvEnlppYaWhZLxuzE0qTuyIc/tD3UzjQjUgAtYoNep3m/4PwtaCAWAYgF21sTbXflCcL4cBZ6mHp0qgvomq68x0vzlX2u4plHsKZ7zC7kfZTp4n6ROVKxqKirZS8Z4n7ap3T/DS4QcmOxf9PhK2s2sCra/CPaYsxu2NvFvGmdJCx0cIyKDAAghlgVMIpgAZYQGCUxwMAHExkcTGXgFEe8TNG3iZpBQ/NFvB3nBoAEvFBjA0W8YD7zo0GcDABSIlo4RRKEMI6iBfDo24kqMKwAJguI4nD/yMQ6j7hOZD/la49Jf4Tt9VFhisMlQffQ5H/Cbj5iZspBsImkxptHouD7UYGrtWNFvuVRl16BvdPrJ1LEo/uuDfyPz3nlDop3ESkrprSqMnwB7v4dvlBKilNo9cKxbTzbCdqMTS0YB19D6ag+gl/ge29JtKgyH+oWHqLj5iVyZayI1YWOtImG4nScXWoNepFvXb5yaP9nlGpGiafYTLFtFtOtK5DEtEIj41yACToBqT0hyAruM8QXD02dtTsq82Y7CeY4mqzMzubu5zMepP5Sz7Q8X/AGiqWB/hpdUHJur+cpi8V27OacuTHU4QwaGEiZAk686060kBRHARoEcIAKBHqY0RwgAUGOvBiOvABSYl5xjYARiYhMaTEvJKH3nXjLzrwAfeKDB3joAEDRwaBBjs0ADBo4GCDRwaAgkS8aGi3jsBYxopiGMAbCMJhGgiIALniMincRJ0AGJQKHNTcoeqkj1tvLDCdocVR+0GHx7rHzXT5SEDHBoAazAdu0OlVCp6kafiX8xNNguN0KoulQeoI9R+dp5YyKdxBfsljmpsVPUEg+ogUpyR7VTXNqgzDqveHymR7ccWKD9mpmzsLuRuqfd8TKDhHEuIKCtGsbW1JVCwHiRKzEhgzF2Luxu7k3Zj8TAcsjkqI7nlyjBHERLSzMchj7xoEcJLAW8W8bFiAeIoEGDHiAx4EcBGgxwMAFWOvEEWAULEiWnQAhkxLxJ0kZ14t4k6AHR1506AHXigxZ0BHAxwM6dGgHAxQ06dGAt4hM6dJAaY0zp0oBMsbaLOgB06dOgAs4GdOgBYYHHlAbG1xK+s5JJM6dGCBzrTp0AHAR06dEI6dOnQA6KJ06ADlMeDOnQAcDFvOnQGdeLedOkgf//Z"
							alt="MacBook"
						/>
					</Colums>
				</ColWrapper>
			</Center>
		</Bg>
	);
};

export default Featured;