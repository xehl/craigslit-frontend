import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const CalBox = styled(Box)({
  backgroundColor: "white",
})

export default function Calendar() {
  return (
    <Box className="sidebar-calendar">
      <br/>february 2023
      <Box sx={{
          display: "grid",
          margin: "0 auto",
          width: "70%",
          backgroundColor: "rgb(110, 110, 110)",
          border: "1px solid rgb(110, 110, 110)",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
          gridGap: "1px",
        }}>
          <CalBox>S</CalBox>
          <CalBox>M</CalBox>
          <CalBox>T</CalBox>
          <CalBox>W</CalBox>
          <CalBox>T</CalBox>
          <CalBox>F</CalBox>
          <CalBox>S</CalBox>
          <CalBox> </CalBox>
          <CalBox> </CalBox>
          <CalBox> </CalBox>
          <CalBox>1</CalBox>
          <CalBox>2</CalBox>
          <CalBox>3</CalBox>
          <CalBox>4</CalBox>
          <CalBox>5</CalBox>
          <CalBox>6</CalBox>
          <CalBox>7</CalBox>
          <CalBox>8</CalBox>
          <CalBox>9</CalBox>
          <CalBox>10</CalBox>
          <CalBox style={{background: 'yellow'}}>11</CalBox>
          <CalBox>12</CalBox>
          <CalBox>13</CalBox>
          <CalBox>14</CalBox>
          <CalBox>15</CalBox>
          <CalBox>16</CalBox>
          <CalBox>17</CalBox>
          <CalBox>18</CalBox>
          <CalBox>19</CalBox>
          <CalBox>20</CalBox>
          <CalBox>21</CalBox>
          <CalBox>22</CalBox>
          <CalBox>23</CalBox>
          <CalBox>24</CalBox>
          <CalBox>25</CalBox>
          <CalBox>26</CalBox>
          <CalBox>27</CalBox>
          <CalBox>28</CalBox>
          <CalBox>29</CalBox>
          <CalBox>30</CalBox>  
          <CalBox>31</CalBox>
          <CalBox> </CalBox>
        </Box>
      </Box>
  );
}